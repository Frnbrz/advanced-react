import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { api } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/')({
  component: Index,
})


async function getTotalSpent() {
  const res = await api.expenses['total'].$get()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

function Index() {
  const { data, error, isPending } = useQuery({
    queryKey: ['get-total-spent'],
    queryFn: getTotalSpent
  })


  if (isPending) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>


  return (
    <Card>
      <CardHeader>
        <CardTitle>Total</CardTitle>
        <CardDescription>El total gastado</CardDescription>
      </CardHeader>
      <CardContent>
        {data.total}
      </CardContent>
    </Card>

  )
}



