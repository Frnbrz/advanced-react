import Button from "@/components/Button"
import Section from "@/components/Section"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/profile')({
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
              {data.user?.picture &&
                <img src={data?.user?.picture} alt="User Avatar" />
              }
              <AvatarFallback>
                {data.user?.name[0]}
              </AvatarFallback>
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
          </div>
          <Button href='/api/logout' white>
            Cerrar sesión
          </Button>
        </div>
      </div>
    </Section>
  )
}