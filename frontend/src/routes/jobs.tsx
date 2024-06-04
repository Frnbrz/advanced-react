import { smallSphere, stars } from '@/assets'
import Arrow from '@/assets/svg/Arrow'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Section from '@/components/Section'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getAllJobsQueryOptions, loadingJobsNavigationOptions, navigateJobDetails } from '@/lib/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'



export const Route = createFileRoute('/jobs')({
  component: Jobs,
})


function Jobs() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery(getAllJobsQueryOptions)

  if (error) return <div className='flex justify-center items w-full h-screen'>Error: {error.message}</div>

  type JobType = {
    id: number
    title: string
    company: string
    city: string
    stack: string
    skills: string
    url: string
    modality: string
    img: string
  }


  async function navigateMoreInfo(job: JobType) {


    const existingJobs = await queryClient.ensureQueryData(
      getAllJobsQueryOptions
    )

    navigate({ to: `/jobs/${job.id}` })

    // loading state
    queryClient.setQueryData(loadingJobsNavigationOptions.queryKey, {
      job: {
        ...job
      },
    })

    try {
      const newJob = await navigateJobDetails({
        job: {
          ...job
        },
      })

      queryClient.setQueryData(getAllJobsQueryOptions.queryKey, {
        ...existingJobs,
        jobs: [newJob, ...existingJobs.jobs],
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='jobs'
    >
      <div className="hidden relative justify-center mb-[1rem] lg:flex">
        <img
          src={smallSphere}
          className="relative z-1"
          width={60}
          height={60}
          alt="Sphere"
        />
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>


      <Heading
        tag="Ofertas de empleo"
        title="Busqueda de empleo"
      />
      <div className='flex flex-col items-center w-full gap-6'>
        {isLoading
          ? Array(3)
            .fill(0)
            .map((_, index) => (
              <div className='w-full max-w-[40rem] border border-n-5 rounded-[2.4375rem] overflow-hidden h-full  p-0 animate-pulse' key={index}>
                <div className="flex flex-col space-y-2">
                  <div className="h-6 w-full animate animate-pulse rounded-md bg-muted" />
                  <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="h-6 w-full animate-pulse rounded-md bg-muted" />
                  <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
                </div>
                <div className="flex justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
                  <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
                </div>
              </div>))
          : data?.jobs.map(job => (
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
                      <Button
                        className='w-full'
                        onClick={() => navigateMoreInfo(job)}
                      >
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
    </Section >
  )
}
