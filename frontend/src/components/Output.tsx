import Button from '@/components/Button'
import { executeCode } from '@/lib/api'
import { useState } from 'react'
import Confetti from 'react-confetti'
import { toast } from "sonner"


interface OutputProps {
  editorRef: React.MutableRefObject<IEditorWithGetValue | null>
  language: string
  setLanguage?: (language: string) => void
}
interface IEditorWithGetValue {
  focus: () => void
  getValue: () => string | undefined
}

function Output({ editorRef, language, }: OutputProps) {
  const [output, setOutput] = useState<string[] | null>(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isOver, setIsOver] = useState<boolean>(false)

  async function runCode() {
    const sourceCode = editorRef.current?.getValue()
    if (!sourceCode) return
    try {
      setIsLoading(true)
      const { run: result } = await executeCode(sourceCode, language)

      setOutput(result.output.split('\n'))

      if (Number(result.output) === 5) {
        console.log('is over')
        setIsOver(true)

      }
      result.stderr ? setIsError(true) : setIsError(false)
      toast("Exito:", {
        description: `Codigo ejecutado correctamente`,
      })
    } catch (error) {
      console.error(error)
      toast("Error:", {
        description: ` ${error}`,
      })
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>

      {isOver && < Confetti

      />}
      <div className='w-full mb-5'>

        <Button onClick={runCode} isLoading={isLoading} animate white>
          Run Code
        </Button>
        <div className='mt-4 bg-n-6 border border-n-6  rounded-t-2xl
        p-2
      '>
          <span
            className='w-full px-4 
          text-n-1 font-bold text-sm lg:text-base lg:px-8 lg:py-4 lg:rounded-[3.5rem] lg:font-bold  lg:leading-6 lg:tracking-[0.02em]  lg:uppercase lg:transition-colors transition ease-in-out delay-150'
          >Output</span>
        </div>
        <div className='bg-n-8 overflow-y-auto  h-[25vh] border border-n-6
      rounded-b-2xl p-4 text-sm text-n-1 font-mono whitespace-pre-wrap
      '>
          {output
            ? output.map((line, index) => (
              <span key={index} className={isError ? 'text-red-500' : ''}>
                {line}
              </span>
            ))
            : 'Codigo sera ejecutado aqui...'}
        </div>

      </div>
    </>
  )
}

export default Output
