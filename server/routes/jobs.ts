import { Hono } from 'hono'

import { infoJobs } from '../db/data/jobs'

export const jobsRoute = new Hono().get('/', async c => {
  return c.json({ jobs: infoJobs })
})
