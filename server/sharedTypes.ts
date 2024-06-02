import { z } from 'zod'
import { insertExpensesSchema } from './db/schema/expenses'
import { insertJobsSchema } from './db/schema/jobs'

export const createExpenseSchema = insertExpensesSchema.omit({
  userId: true,
  createdAt: true,
  id: true,
})

export type CreateExpense = z.infer<typeof createExpenseSchema>

export const createJobSchema = insertJobsSchema.omit({
  userId: true,
  createdAt: true,
  id: true,
})

export type CreateJob = z.infer<typeof createJobSchema>

export type JobSchema = z.infer<typeof insertJobsSchema>
