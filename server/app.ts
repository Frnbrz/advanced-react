import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { authRoute } from './routes/auth'
import { chatbotRoute } from './routes/chatbot'
import { expensesRoute } from './routes/expenses'
import { jobsRoute } from './routes/jobs'

const app = new Hono()

app.use('*', logger())

const apiRoutes = app
  .basePath('/api')
  .route('/expenses', expensesRoute)
  .route('/jobs', jobsRoute)
  .route('/chatbot', chatbotRoute)
  .route('/', authRoute)

app.get('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
export type ApiRoutes = typeof apiRoutes
