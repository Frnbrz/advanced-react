import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/apply')({
  component: () => <div>Hello /_authenticated/apply!</div>
})