import {
  index,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const expenses = pgTable(
  'jobs',
  {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    description: text('description').notNull(),
    amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
  },
  expenses => {
    return {
      userId: index('name_idx').on(expenses.userId),
    }
  },
)

export const insertExpensesSchema = createInsertSchema(expenses, {
  description: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters' }),
  amount: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: 'Amount must be a valid monetary value',
  }),
})
export const selectExpensesSchema = createSelectSchema(expenses)
