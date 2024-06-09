import { smallSphere, stars } from '@/assets'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Section from '@/components/Section'
import { Skeleton } from '@/components/ui/skeleton'
import { interviewData, loadingJobsNavigationOptions } from '@/lib/api'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/jobs/$jobId')({
  component: JobId,
})

function JobId() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  let jobLocalStorage: { job: string | null } = { job: null }
  const { data: loadingJobNavigation } = useQuery(
    loadingJobsNavigationOptions
  )

  // Intenta obtener la oferta de trabajo de localStorage si no está disponible a través de useQuery
  if (!loadingJobNavigation?.job) {
    const jobFromLocalStorage = window.localStorage.getItem('job')
    if (jobFromLocalStorage) {
      jobLocalStorage.job = JSON.parse(jobFromLocalStorage)
    }
  }

  // Verifica si hay alguna oferta de trabajo disponible
  const jobAvailable = loadingJobNavigation?.job || jobLocalStorage.job

  async function startInterview() {

    queryClient.setQueryData(interviewData.queryKey, {
      state: 0
    })
    await navigate({ to: `/interview` })
  }

  if (!jobAvailable) return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='jobs-details'
    >
      <div className="container grid gap-4">
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
          tag="Error"
          title="Detalle de oferta no encontrada"
        />
        <Button href='/jobs' white>
          Volver a la busqueda
        </Button>
      </div>

    </Section>
  )


  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='jobs-details'
    >
      <div className="container grid gap-4">
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
          tag="Informacion de la oferta de empleo"
          title="Detalles de la oferta de empleo"
        />


        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 h-[80vh]
        lg:h-[66vh]">

          {!jobAvailable ? (
            <div className="mx-auto aspect-video overflow-hidden rounded-xl">
              <Skeleton className="h-full w-full" />
            </div>
          ) :
            jobAvailable && typeof jobAvailable !== 'string' && (
              <img
                src={`/companies/${jobAvailable.img}.jpeg`}
                alt="Job Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            )
          }
          {!jobAvailable ? (
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-8 w-80" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-80" />
              <Button white>
                Apply Now
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BuildingIcon className="h-4 w-4" />
                  {jobAvailable && typeof jobAvailable !== 'string' && jobAvailable?.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <LocateIcon className="h-4 w-4" />
                  {jobAvailable && typeof jobAvailable !== 'string' && jobAvailable?.city}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <CodeIcon className="h-4 w-4" />
                  {jobAvailable && typeof jobAvailable !== 'string' && jobAvailable?.skills}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BriefcaseIcon className="h-4 w-4" />
                  {jobAvailable && typeof jobAvailable !== 'string' && jobAvailable?.modality}
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our growing team and help us build the next generation of web applications. You'll work on a
                  variety of projects, from complex web apps to marketing sites, and have the opportunity to learn new
                  technologies and frameworks.
                </p>
              </div>
              <Button white onClick={startInterview}>
                Realizar oferta
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section >

  )
}


function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}





function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}