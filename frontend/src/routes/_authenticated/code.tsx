import EditorComponent from '@/components/EditorComponent'
import Output from '@/components/Output'
import Section from '@/components/Section'
import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'


export const Route = createFileRoute('/_authenticated/code')({
  component: Code,
})
interface IEditor {
  focus: () => void
  getValue: () => any
}


function Code() {
  const [language, setLanguage] = useState('javascript')
  const editorRef = useRef<IEditor | null>(null)



  return (
    <Section id="code"
      className='pt-[12rem] -mt-[5.25rem] '
      crosses
      crossesOffset='lg:translate-y-[5.25rem]'
      customPaddings='pt-[12rem] -mt-[5.25rem]' >
      <div className="container ">


        <div className=" flex flex-row gap-5">
          <div className=" w-[50%]">
            <div className='w-full'>

              <div className='mt-4 bg-n-6 border border-n-6  rounded-t-2xl
        p-2
      '>
                <span
                  className='w-full px-4 
          text-n-1 font-bold text-sm lg:text-base lg:px-8 lg:py-4 lg:rounded-[3.5rem] lg:font-bold  lg:leading-6 lg:tracking-[0.02em]  lg:uppercase lg:transition-colors transition ease-in-out delay-150'
                >Output</span>
              </div>
              <div className='bg-n-8 overflow-y-auto  h-[78vh] border border-n-6
      rounded-b-2xl p-4 text-sm text-n-1 font-mono whitespace-pre-wrap
      '>
                <p className='text-2xl'>
                  Se desea implementar una funcion que reciba dos valores y retorne la suma de los mismos.
                </p>
              </div>

            </div>
          </div>

          <div className=" flex flex-col w-[50%]">


            <EditorComponent
              editorRef={editorRef}
              language={language}
              setLanguage={setLanguage}
            />
            <Output
              editorRef={editorRef}
              language={language}
              setLanguage={setLanguage}
            />
          </div>
        </div>
      </div>

    </Section >
  )
}