import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/apply')({
  component: () => <div>Hello /_authenticated/apply!</div>
})