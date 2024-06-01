import Arrow from '@/assets/svg/Arrow'
import Button from '@/components/Button'
import Section from '@/components/Section'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { getAllJobsOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: Home,
})

function Home() {
  const { isPending, error, data } = useQuery(getAllJobsOptions)

  if (error) return <div>Error: {error.message}</div>

  // function async navigateMoreInfo() {
  //    const existingExpenses = await queryClient.ensureQueryData(
  //       getAllExpensesQueryOptions
  //     )

  //     navigate({ to: "/expenses" })

  //     // loading state
  //     queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {
  //       expense: value,
  //     })

  //     try {
  //       const newExpense = await createExpense({ value })

  //       queryClient.setQueryData(getAllExpensesQueryOptions.queryKey, {
  //         ...existingExpenses,
  //         expenses: [newExpense, ...existingExpenses.expenses],
  //       })

  //       toast("Expense Created", {
  //         description: `Successfully created new expense: ${newExpense.id}`,
  //       })
  //       // success state
  //     } catch (error) {
  //       // error state
  //       toast("Error", {
  //         description: `Failed to create new expense`,
  //       })
  //     } finally {
  //       queryClient.setQueryData(loadingCreateExpenseQueryOptions.queryKey, {})
  //     }
  //   }

  return (
    <Section
      className='flex justify-center w-full'
      crossesOffset='lg:translate-y-[5.25rem]'
      id='home'
    >

      <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
        <h3 className='h3 mb-6'>Busqueda de empleo</h3>
        <div className='grid gap-4'>
          {isPending
            ? Array(5)
              .fill(0)
              .map((_, i) => (
                <Card
                  key={i}
                  className='w-full max-w-[40rem] border border-n-6 rounded-[2.4375rem] overflow-hidden h-full space-x-5 '
                >
                  <CardHeader>
                    <CardTitle className='text-lg text-n-1 font-semibold'>
                      <Skeleton className='h-3' />
                    </CardTitle>
                    <CardDescription className='text-n-3 text-sm'>
                      <Skeleton className='h-3' />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className='h-3' />
                  </CardContent>
                  <CardFooter className='flex justify-end'>
                    <Skeleton className='h-3' />
                  </CardFooter>
                </Card>
              ))
            : data.jobs.map(job => (
              <Card
                className='w-full max-w-[40rem] border border-n-5 rounded-[2.4375rem] overflow-hidden h-full  p-0'
                key={job.id}
              >
                <div className='rounded-[2.5rem] p-7 bg-n-7'>
                  <CardHeader>
                    <CardTitle className='text-lg text-n-1 font-semibold'>
                      {job.title}
                    </CardTitle>
                    <CardDescription className='text-n-3 text-sm'>
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <div className='flex items-center space-x-4'>
                    <img
                      alt='Company Logo'
                      className='rounded-xl'
                      height={120}
                      width={120}
                      src={`/companies/${job.img}.jpeg`}
                      style={{
                        aspectRatio: '48/48',
                        objectFit: 'cover',
                      }}

                    />
                    <div className='w-full'>

                      <CardContent>
                        <p>{job.city}</p>
                        <p>{job.stack}</p>
                      </CardContent>
                      <CardFooter className='flex justify-end'>
                        <Button>
                          <div className='flex items-center mt-auto'>
                            <span className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>
                              Más información
                            </span>

                            <Arrow />
                          </div>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

        </div>

      </div>
    </Section>
  )
}
