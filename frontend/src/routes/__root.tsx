import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeaderHome from '@/components/HeaderHome'
import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, useLocation } from '@tanstack/react-router'
import { Toaster } from 'sonner'


interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root,
})






function Root() {
  const lotacion = useLocation()
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {lotacion.pathname === '/' ? <Header /> : <HeaderHome />}
        <Outlet />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}