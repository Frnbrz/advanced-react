import { zValidator } from '@hono/zod-validator'
import { desc, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { db } from '../db'
import { insertJobsSchema, jobs as jobsTable } from '../db/schema/jobs'
import { getUser } from '../kinde'
import { createJobSchema } from '../sharedTypes'

export const jobsRoute = new Hono()
  .get('/', async c => {
    const jobs = await db
      .select()
      .from(jobsTable)
      .orderBy(desc(jobsTable.createdAt))
      .limit(100)

    return c.json({ jobs })
  })
  .get('/:id{[0-9]+}', async c => {
    const id = Number.parseInt(c.req.param('id'))

    const job = await db
      .select()
      .from(jobsTable)
      .where(eq(jobsTable.id, id))
      .then(res => res[0])

    if (!job) {
      return c.notFound()
    }

    return c.json({ job })
  })
  .post('/', getUser, zValidator('json', createJobSchema), async c => {
    const job = await c.req.valid('json')
    const user = c.var.user

    const validatedJob = insertJobsSchema.parse({
      ...job,
      modality: job.modality.toString(),
      userId: user.id,
    })

    const result = await db
      .insert(jobsTable)
      .values(validatedJob)
      .returning()
      .then(res => res[0])

    c.status(201)
    return c.json(result)
  })

// export const expensesRoute = new Hono()
//   .get('/', getUser, async c => {
//     const user = c.var.user

//     const expenses = await db
//       .select()
//       .from(expenseTable)
//       .where(eq(expenseTable.userId, user.id))
//       .orderBy(desc(expenseTable.createdAt))
//       .limit(100)

//     return c.json({ expenses: expenses })
//   })
//   .post('/', getUser, zValidator('json', createExpenseSchema), async c => {
//     const expense = await c.req.valid('json')
//     const user = c.var.user

//     const validatedExpense = insertExpensesSchema.parse({
//       ...expense,
//       userId: user.id,
//     })

//     const result = await db
//       .insert(expenseTable)
//       .values(validatedExpense)
//       .returning()
//       .then(res => res[0])

//     c.status(201)
//     return c.json(result)
//   })
//   .get('/total', getUser, async c => {
//     const user = c.var.user
//     const result = await db
//       .select({ total: sum(expenseTable.amount) })
//       .from(expenseTable)
//       .where(eq(expenseTable.userId, user.id))
//       .limit(1)
//       .then(res => res[0])
//     return c.json(result)
//   })
//   .get('/:id{[0-9]+}', getUser, async c => {
//     const id = Number.parseInt(c.req.param('id'))
//     const user = c.var.user

//     const expense = await db
//       .select()
//       .from(expenseTable)
//       .where(and(eq(expenseTable.userId, user.id), eq(expenseTable.id, id)))
//       .then(res => res[0])

//     if (!expense) {
//       return c.notFound()
//     }

//     return c.json({ expense })
//   })
//   .delete('/:id{[0-9]+}', getUser, async c => {
//     const id = Number.parseInt(c.req.param('id'))
//     const user = c.var.user

//     const expense = await db
//       .delete(expenseTable)
//       .where(and(eq(expenseTable.userId, user.id), eq(expenseTable.id, id)))
//       .returning()
//       .then(res => res[0])

//     if (!expense) {
//       return c.notFound()
//     }

//     return c.json({ expense: expense })
//   })
