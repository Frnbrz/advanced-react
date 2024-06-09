import Button from '@/components/Button'
import Section from '@/components/Section'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button as Button2 } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/_authenticated/interview')({
  component: Interview,
})

const response = [
  'Bienvenido a la entrevista de trabajo de DevCode. ¿Qué te motiva a optar por esta oferta?',
  '¿Qué es lo que te gusta de esta empresa y qué no te gusta de otras?',
  '¿Cuál ha sido el desafío más complejo que has experimentado y cómo lo solventaste?', 'Adiós, ¡que tengas un buen día!',


]


function Interview() {
  const [isFinished, setIsFinished] = useState(false)
  const [state, setState] = useState(1)
  const [responses, setResponses] = useState([

    {
      id: 1,
      text: 'Bienvenido a la entrevista de trabajo de DevCode. ¿Qué te motiva a optar por esta oferta?',
    }
  ])

  async function sendText(e) {
    e.preventDefault()
    const userResponse = e.target[0].value

    if (state < response.length) {
      await setResponses(prevResponses => [...prevResponses, {
        id: state + 1,
        text: userResponse
      }])

      setState(state + 1)



      await setResponses(prevResponses => [...prevResponses, {
        id: state + 2,
        text: response[state]
      }])

      console.log(responses)

      setState(state + 1)

      if (state == response.length - 1) {
        toast("Exito:", {
          description: `Entrevista finalizada`,
        })

        setIsFinished(true)


      }
    }
  }


  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='interview'
    >
      <div className="container">

        {
          isFinished && (
            <div className="flex items-center justify-center p-4">
              <h1 className="text-2xl font-medium">Entrevista finalizada</h1>
              <Button href='/code' white className='ml-5'>
                Continuar
              </Button>
            </div>
          )
        }
        <div className="flex flex-col mx-5 h-[80vh] bg-n-7 border border-n-5 rounded-xl">
          <header className="bg-n-6  text-white py-4 px-6 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <img src="/companies/company2.jpeg" alt="Company" />
                <AvatarFallback>

                </AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-medium">ALVEA SOLUCIONES TECNOLOGICAS</h1>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-6 bg-n-7">
            <div className="space-y-4">
              {responses.map((response, index) => (

                <div key={response.id} className={`flex items-start gap-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-${index % 2 === 0 ? 'n-10' : 'blue-500'} rounded-lg p-4 max-w-[75%] text-sm`}>
                    <p>
                      {response.text}
                    </p>
                  </div>
                  <Avatar className="w-8 h-8">
                    <img src="/companies/company2.jpeg" alt="ChatGPT" />
                    <AvatarFallback>

                    </AvatarFallback>
                  </Avatar>

                </div>


              ))
              }
            </div>
          </div >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              void sendText(e)
            }} className="bg-n-6 px-6 py-4 flex items-center gap-2 rounded-b-xl">

            <Textarea
              placeholder="Type your message..."
              className="flex-1 rounded-lg bg-white dark:bg-gray-800 border-none focus:ring-0 focus:outline-none p-3 text-sm dark:text-gray-200"
            />
            <Button2
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
              disabled={isFinished}
            >
              <SendIcon className="w-5 h-5" />
            </Button2>
          </form>
        </div>
      </div>
    </Section >
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