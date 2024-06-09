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


      {/* flex col desktop no flex mobile */}
      <div className="flex flex-col lg:flex-row justify-center  gap-5">

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
    </Section >
  )
}