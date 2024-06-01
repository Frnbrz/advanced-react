import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Section from './components/Section'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()


const router = createRouter({
  routeTree, context: { queryClient },
  defaultNotFoundComponent: NotFound,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function NotFound() {
  return (
    <Section
      className='flex justify-center items-center w-full h-[70vh]'
      crossesOffset='lg:translate-y-[5.25rem]'
      id='not-found'
    >
      <h3 className='text-4xl font-bold'>
        404
      </h3>
    </Section>
  )
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
