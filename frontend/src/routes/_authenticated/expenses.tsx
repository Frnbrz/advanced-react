import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { getAllExpensesQueryOptions, loadingCreateExpenseQueryOptions } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/expenses')({
  component: Expenses,
})




function Expenses() {

  const { isPending, error, data } = useQuery(getAllExpensesQueryOptions)
  const { data: loadingCreateExpense } = useQuery(
    loadingCreateExpenseQueryOptions
  )


  if (error) return <div>Error: {error.message}</div>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Amoiut</TableHead>
          <TableHead>Method</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loadingCreateExpense?.expense && (
          <TableRow>
            <TableCell className="font-medium">
              <Skeleton className="h-3" />
            </TableCell>
            <TableCell><Skeleton className="h-3" /></TableCell>
            <TableCell><Skeleton className="h-3" /></TableCell>

          </TableRow>
        )}
        {isPending ?
          Array(3).fill(0).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-4" /></TableCell>
              <TableCell><Skeleton className="h-4" /></TableCell>
              <TableCell><Skeleton className="h-4" /></TableCell>
            </TableRow>
          )) :
          data?.expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>{expense.id}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.amount}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>

  )
}