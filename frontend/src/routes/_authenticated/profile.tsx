import { userQueryOptions } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from '@tanstack/react-router'







export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
})

function Profile() {
  const { data, error, isPending } = useQuery(userQueryOptions)

  if (isPending) return <div>Loading...</div>
  if (error) return <div>Usuario no logeado</div>

  return (
    <div className="p-2">
      <h3>Hola {data.user.given_name}</h3>

      <a href="/api/logout">logout</a>
    </div>
  )
}
