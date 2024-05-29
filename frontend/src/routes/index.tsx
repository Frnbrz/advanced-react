import Benefits from '@/components/Benefits'
import Collaboration from '@/components/Collaboration'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Roadmap from '@/components/Roadmap'
import Services from '@/components/Services'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})



function Index() {
  return (
    <>
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />

    </>

  )
}



