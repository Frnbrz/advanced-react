import Section from '@/components/Section'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/interview')({
  component: Interview,
})

function Interview() {
  const { data, error, isPending } = useQuery(userQueryOptions)

  if (isPending) return <div>Loading...</div>
  if (error) return <div>Usuario no logeado</div>
  return (
    <Section
      crossesOffset='lg:translate-y-[5.25rem]'
      id='interview'
    >
      <div className="container">
        <div className="flex flex-col mx-5 h-screen bg-n-7 border border-n-5 rounded-xl">
          <header className="bg-n-6  text-white py-4 px-6 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <img src="/placeholder.svg" alt="ChatGPT" />
                <AvatarFallback>GPT</AvatarFallback>
              </Avatar>
              <h1 className="text-lg font-medium">ChatGPT</h1>
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
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret ">Hi there! I'm looking for some advice on how to get started with web development.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-4 max-w-[75%] text-sm">
                  <p>Great! Web development is a vast field, but here are some tips to get you started:</p>
                </div>
                <Avatar className="w-8 h-8 shrink-0">
                  <img src="/placeholder.svg" alt="ChatGPT" />
                  <AvatarFallback>GPT</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 shrink-0">
                  <img src="/placeholder.svg" alt="ChatGPT" />
                  <AvatarFallback>GPT</AvatarFallback>
                </Avatar>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 max-w-[75%] text-sm">
                  <p>
                    1. Start by learning the basics of HTML, CSS, and JavaScript. These are the core technologies that power
                    the web.
                  </p>
                  <p className="mt-2">
                    2. Practice building simple websites and web applications to get hands-on experience. You can use online
                    tutorials, courses, or build your own projects.
                  </p>
                  <p className="mt-2">
                    3. Explore popular web development frameworks and libraries like React, Angular, or Vue.js. These can
                    help you build more complex and interactive web applications.
                  </p>
                  <p className="mt-2">
                    4. Learn about web development best practices, such as responsive design, accessibility, and performance
                    optimization.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-blue-500 text-white rounded-lg p-4 max-w-[75%] text-sm">
                  <p>
                    That's really helpful, thank you! I'll definitely start with the basics and then explore some
                    frameworks. Is there anything else I should keep in mind as I get started?
                  </p>
                </div>
                <Avatar className="w-8 h-8 shrink-0">
                  {data?.user?.picture && <img src={data?.user?.picture} alt="You" />}
                  <AvatarFallback>YO</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8 shrink-0">
                  <img src="/placeholder.svg" alt="ChatGPT" />
                  <AvatarFallback>GPT</AvatarFallback>
                </Avatar>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 max-w-[75%] text-sm">
                  <p>Absolutely! Here are a few more tips:</p>
                  <p className="mt-2">
                    5. Stay up-to-date with the latest web development trends and technologies. The field is constantly
                    evolving, so it's important to keep learning and adapting.
                  </p>
                  <p className="mt-2">
                    6. Build a portfolio of your work to showcase your skills to potential employers or clients.
                  </p>
                  <p className="mt-2">
                    7. Consider joining online communities, forums, or local meetups to connect with other web developers
                    and learn from their experiences.
                  </p>
                  <p className="mt-2">
                    8. Don't be afraid to experiment and try new things. Web development is all about learning and
                    problem-solving, so embrace the process and have fun with it!
                  </p>
                </div>
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