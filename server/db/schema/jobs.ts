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

// {
//     id: '0813d3c88b4a3187cc9533d8529550',
//     title: 'Desarrollador/a Javascript, React y Python - Híbrido (Valencia)',
//     company: 'SANDAV',
//     city: 'Valencia',
//     stack: 'fullstack',
//     skills: [
//       'JavaScript',
//       'Python',
//       'react',
//       'Inteligencia artificial',
//       'OpenCV (Open source Computer Vision)',
//       'tensorflow',
//     ],
//     url: 'https://www.infojobs.net/valencia/desarrollador-javascript-react-python-hibrido-valencia/of-i0813d3c88b4a3187cc9533d8529550',
//     createdAt: '2023-06-23T06:45:01.804Z',
//     updatedAt: '2023-06-23T06:45:01.804Z',
//     modality: 3,
//     min_salary: 30000,
//     max_salary: 40000,
//     img: 'company8',
//   },

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
    updatedAt: timestamp('updated_at').defaultNow(),
    modality: numeric('modality').notNull(),
    min_salary: numeric('min_salary').notNull(),
    max_salary: numeric('max_salary').notNull(),
    img: text('img').notNull(),
  },
  jobs => {
    return {
      userId: index('name_idx').on(jobs.userId),
    }
  },
)

export const insertJobsSchema = createInsertSchema(jobs, {
  title: z.string().min(3, { message: 'Title must be at least 3 characters' }),
  company: z
    .string()
    .min(3, { message: 'Company must be at least 3 characters' }),
  city: z.string().min(3, { message: 'City must be at least 3 characters' }),
  stack: z.string().min(3, { message: 'Stack must be at least 3 characters' }),
  skills: z
    .string()
    .min(3, { message: 'Skills must be at least 3 characters' }),
  url: z.string().min(3, { message: 'Url must be at least 3 characters' }),
  modality: z.number().int(),
  min_salary: z.number().int(),
  max_salary: z.number().int(),
  img: z.string().min(3, { message: 'Img must be at least 3 characters' }),
})
export const selectJobsSchema = createSelectSchema(jobs)
