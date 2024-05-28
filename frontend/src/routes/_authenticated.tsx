import { userQueryOptions } from '@/lib/api'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({

  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient
    try {
      const data = await queryClient.fetchQuery(userQueryOptions)
      return data
    } catch (error) {
      return { user: null }
    }
  },
  component: Component
})



function Component() {
  const { user } = Route.useRouteContext()

  if (!user) {
    return <Login />
  } else {
    return (
      <Outlet />
    )
  }
}


function Login() {
  return (
    <div className="p-2">
      <h3>Usuario no logeado</h3>
      <a href="/api/login">Login</a>
    </div>
  )
}