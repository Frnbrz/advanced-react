import { LANGUAGES } from '@/constants'
import { type ApiRoutes } from '@server/app'
import { type CreateExpense, type CreateJob } from '@server/sharedTypes'
import { queryOptions } from '@tanstack/react-query'
import { hc } from 'hono/client'

const client = hc<ApiRoutes>('/')

export const api = client.api

async function getCurrentUserProfile() {
  const res = await api.me.$get()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

export const userQueryOptions = queryOptions({
  queryKey: ['get-current-user-profile'],
  queryFn: getCurrentUserProfile,
  staleTime: Infinity,
})

export async function getAllExpenses() {
  const res = await api.expenses.$get()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

export const getAllExpensesQueryOptions = queryOptions({
  queryKey: ['get-all-expenses'],
  queryFn: getAllExpenses,
  staleTime: 1000 * 60 * 5, // 5 minutes
})

export async function getAllJobs() {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await api.jobs.$get()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

export const getAllJobsQueryOptions = queryOptions({
  queryKey: ['get-all-jobs'],
  queryFn: getAllJobs,
  staleTime: 1000 * 60 * 5, // 5 minutes
})

export async function createExpense({ value }: { value: CreateExpense }) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await api.expenses.$post({ json: value })

  if (!res.ok) {
    throw new Error('Failed to create expense')
  }
  const newExpense = await res.json()
  return newExpense
}

export async function createJob({ value }: { value: CreateJob }) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await api.jobs.$post({ json: value })

  if (!res.ok) {
    throw new Error('Failed to create expense')
  }
  const newJob = await res.json()
  return newJob
}

export async function getJobById(id: number) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await api.jobs.$get({ param: { id: id.toString() } })

  if (!res.ok) {
    throw new Error('Failed to fetch job by id')
  }
  const job = await res.json()
  return job
}

export const loadingCreateExpenseQueryOptions = queryOptions<{
  expense?: CreateExpense
}>({
  queryKey: ['loading-create-expense'],
  queryFn: async () => {
    return {}
  },
  staleTime: Infinity,
})

export const interviewData = queryOptions<{
  state: number
}>({
  queryKey: ['interview-data'],
  queryFn: async () => {
    return { state: 0 }
  },
  staleTime: Infinity,
})

export async function navigateJobDetails({ job }: { job: CreateJob }) {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await api.jobs.$post({ json: job })

  if (!res.ok) {
    throw new Error('Failed to create expense')
  }
  const newJob = await res.json()
  return newJob
}

export const loadingJobsNavigationOptions = queryOptions<{
  job?: CreateJob
}>({
  queryKey: ['loading-jobs-navigation'],
  queryFn: async () => {
    return {}
  },
  staleTime: 1000 * 60 * 5,
})

export async function executeCode(sourceCode: string, language: string) {
  const res = await fetch('https://emkc.org/api/v2/piston/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      language: language,
      version: LANGUAGES[language as keyof typeof LANGUAGES],
      files: [
        {
          content: sourceCode,
        },
      ],
    }),
  })

  if (!res.ok) {
    throw new Error('Failed to execute code')
  }
  return await res.json()
}

// const API = axios.create({
//   baseURL: 'https://emkc.org/api/v2/piston',
// })

// export async function executeCode(sourceCode: string, language: string) {
//   const response = await API.post('/execute', {
//     language,
//     version: LANGUAGES[language as keyof typeof LANGUAGES],
//     files: [
//       {
//         content: sourceCode,
//       },
//     ],
//   })
//   return response.data
// }
