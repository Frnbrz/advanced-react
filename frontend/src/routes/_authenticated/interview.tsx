import Section from '@/components/Section'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { interviewData, userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/interview')({
  component: Interview,
})

function Interview() {
  const { data, error, isPending } = useQuery(userQueryOptions)
  const { data: interviewState } = useQuery(interviewData)

  console.log(interviewState?.state)


  if (isPending) return <div>Loading...</div>
  if (error) return <div>Usuario no logeado</div>
  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='interview'
    >
      <div className="container">
        <div className="flex flex-col mx-5 h-[80vh] bg-n-7 border border-n-5 rounded-xl">
          <header className="bg-n-6  text-white py-4 px-6 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <img src="/companies/company2.jpeg" alt="ChatGPT" />
                <AvatarFallback>

                </AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-medium">ALVEA SOLUCIONES TECNOLOGICAS</h1>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-6 bg-n-7">
            {data && <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 shrink-0">
                  {data?.user?.picture && <img src={data?.user?.picture} alt="You" />}
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="bg-n-10  rounded-lg p-4 max-w-[75%] text-sm">
                  <p className="relative w-[max-content] font-mono 
before:absolute before:inset-0 before:animate-typewriter before:bg-n-10 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret ">Hola, estoy interesado en su oferta.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-4 max-w-[75%] text-sm">
                  <p>
                    Hola, ¡gracias por tu interés! ¿Tienes alguna experiencia previa en el desarrollo web?
                  </p>
                </div>
                <Avatar className="w-8 h-8">
                  <img src="/companies/company2.jpeg" alt="ChatGPT" />
                  <AvatarFallback>

                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 shrink-0">
                  {data?.user?.picture && <img src={data?.user?.picture} alt="You" />}
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 max-w-[75%] text-sm">

                  <p>Tengo algo de experiencia con HTML, CSS y JavaScript, pero me gustaría aprender más y mejorar mis habilidades. </p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-4 max-w-[75%] text-sm">
                  <p>
                    Eso es genial.
                  </p>
                </div>
                <Avatar className="w-8 h-8">
                  <img src="/companies/company2.jpeg" alt="ChatGPT" />
                  <AvatarFallback>

                  </AvatarFallback>
                </Avatar>
              </div>
            </div>}
          </div>
          <div className="bg-n-6 px-6 py-4 flex items-center gap-2 rounded-b-xl">
            <Textarea
              placeholder="Type your message..."
              className="flex-1 rounded-lg bg-white dark:bg-gray-800 border-none focus:ring-0 focus:outline-none p-3 text-sm dark:text-gray-200"
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <SendIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}