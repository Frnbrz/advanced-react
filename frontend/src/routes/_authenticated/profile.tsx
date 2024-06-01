import Button from "@/components/Button"
import Section from "@/components/Section"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
})

function Profile() {
  const { data, error, isPending } = useQuery(userQueryOptions)

  if (isPending) return <div>Loading...</div>
  if (error) return <div>Usuario no logeado</div>

  return (
    <Section
      className='flex justify-center w-full'
      crossesOffset='lg:translate-y-[5.25rem]'
      id='profile'
    >
      <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              {data.user?.picture ?
                <img src={data?.user?.picture} alt="User Avatar" /> :
                <AvatarFallback>JD</AvatarFallback>
              }
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{data.user.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">{data.user.email}</p>
            </div>
          </div>
          <div className="w-full space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Bio</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Soy un ingeniero de software con pasión por construir aplicaciones web hermosas y funcionales. En mi tiempo libre, disfruto leyendo, haciendo senderismo y pasando tiempo con mi familia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Intereses</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" >Tecnologia</Badge>
                <Badge variant="outline">Outdoors</Badge>
                <Badge variant="outline">Reading</Badge>
                <Badge variant="outline">Travel</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">johndoe@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">+1 (555) 555-5555</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                    www.example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Button href='/api/logout' white>
            Cerrar sesión
          </Button>
        </div>
      </div>
    </Section>
  )
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}





function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}