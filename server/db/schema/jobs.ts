import { index, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const jobs = pgTable(
  'jobs',
  {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    title: text('title').notNull(),
    company: text('company').notNull(),
    city: text('city').notNull(),
    stack: text('stack').notNull(),
    skills: text('skills').notNull(),
    url: text('url').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    modality: text('modality').notNull(),
    img: text('img').notNull(),
  },
  jobs => {
    return {
      userId: index('jobs_user_id_index').on(jobs.userId),
    }
  },
)

export const insertJobsSchema = createInsertSchema(jobs, {
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  company: z
    .string()
    .min(3, { message: 'Company must be at least 3 characters' }),
  createdAt: z.date(),
  city: z.string().min(3, { message: 'City must be at least 3 characters' }),
  stack: z.string().min(3, { message: 'Stack must be at least 3 characters' }),
  skills: z
    .string()
    .min(3, { message: 'Skills must be at least 3 characters' }),
  url: z.string().min(3, { message: 'Url must be at least 3 characters' }),
  modality: z
    .string()
    .min(3, { message: 'Modality must be at least 3 characters' }),
  img: z.string().min(3, { message: 'Img must be at least 3 characters' }),
})
export const selectJobsSchema = createSelectSchema(jobs)
