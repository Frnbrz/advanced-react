import Section from '@/components/Section'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {
  return (
    <Section
      className='pt-[12rem] -mt-[5.25rem]'
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      id='home'
    >
      <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
        <h1 className='h1 mb-6'>
          Home
        </h1>
      </div>
    </Section>
  )
}