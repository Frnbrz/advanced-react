import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  deleteExpense,
  getAllExpensesQueryOptions,
  loadingCreateExpenseQueryOptions,
} from '@/lib/api'
import { TrashIcon } from "@radix-ui/react-icons"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import { toast } from 'sonner'

export const Route = createLazyFileRoute('/_authenticated/expenses')({
  component: Expenses,
})

function Expenses() {
  const { isPending, error, data } = useQuery(getAllExpensesQueryOptions)
  const { data: loadingCreateExpense } = useQuery(
    loadingCreateExpenseQueryOptions,
  )

  if (error) return <div>Error: {error.message}</div>

  return (
    <Section
      id="expenses"
      className='flex justify-center w-full'
      crossesOffset='lg:translate-y-[5.25rem]'
    >
      <Table className='max-w-max m-auto '>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Amoiut</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loadingCreateExpense?.expense && (
            <TableRow>
              <TableCell className='font-medium'>
                <Skeleton className='h-3' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-3' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-3' />
              </TableCell>
              <TableCell>
                <Skeleton className='h-3' />
              </TableCell>
            </TableRow>
          )}
          {isPending
            ? Array(3)
              .fill(0)
              .map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className='h-4' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4' />
                  </TableCell>
                  <TableCell>
                    <Skeleton className='h-4' />
                  </TableCell>
                </TableRow>
              ))
            : data?.expenses.map(expense => (
              <TableRow key={expense.id}>
                <TableCell>{expense.id}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>
                  <ExpenseDeleteButton id={expense.id} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Section>
  )
}


function ExpenseDeleteButton({ id }: { id: number }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteExpense,
    onError: () => {
      toast("Error", {
        description: `Failed to delete expense: ${id}`,
      })
    },
    onSuccess: () => {
      toast("Expense Deleted", {
        description: `Successfully deleted expense: ${id}`,
      })

      queryClient.setQueryData(
        getAllExpensesQueryOptions.queryKey,
        (existingExpenses) => ({
          ...existingExpenses,
          expenses: existingExpenses!.expenses.filter((e) => e.id !== id),
        })
      )
    },
  })

  return (
    <Button variant="outline" size="icon" disabled={mutation.isPending}
      onClick={() => mutation.mutate({ id })}>
      {mutation.isPending ? "..." : <TrashIcon className="h-4 w-4" />}
    </Button>
  )
} 