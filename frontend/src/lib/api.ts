import { type ApiRoutes } from '@server/app'
import { type CreateExpense } from '@server/sharedTypes'
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
  const res = await api.jobs.$get()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

export const getAllJobsOptions = queryOptions({
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

export const loadingCreateExpenseQueryOptions = queryOptions<{
  expense?: CreateExpense
}>({
  queryKey: ['loading-create-expense'],
  queryFn: async () => {
    return {}
  },
  staleTime: Infinity,
})

export const deleteExpense = async ({ id }: { id: number }) => {
  await new Promise(r => setTimeout(r, 3000))
  const res = await api.expenses[':id{[0-9]+}'].$delete({
    param: { id: id.toString() },
  })
  if (!res.ok) {
    throw new Error('Failed to delete expense')
  }
}
