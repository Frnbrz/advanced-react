import Button from '@/components/Button'
import Section from '@/components/Section'
import { userQueryOptions } from '@/lib/api'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({

  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient
    try {
      const data = await queryClient.fetchQuery(userQueryOptions) || null
      return data
    } catch (error) {
      return { user: null }
    }
  },
  component: Component
})



function Component() {
  // Safely access the context, ensuring it's an object before destructuring
  const context = Route.useRouteContext() || {}
  const { user = null } = context

  if (!user) {
    return <Login />
  } else {
    return <Outlet />
  }
}


function Login() {
  return (
    <Section className='flex justify-center w-full h-[80vh]' crossesOffset='lg:translate-y-[5.25rem]' id='login'>
      <div className='flex flex-col gap-5 '>

        <h3>Usuario no logeado</h3>
        <Button white href="/api/login">Login</Button>
      </div>
    </Section>
  )
}