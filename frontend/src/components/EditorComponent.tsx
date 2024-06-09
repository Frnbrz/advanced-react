
import { CODE_SNIPPETS } from "@/constants"
import Editor from "@monaco-editor/react"
import { useState } from "react"
import LanguageSelector from "./LanguageSelector"


interface EditorComponentProps {
  editorRef: React.MutableRefObject<IEditor | null>
  language: string
  setLanguage: (language: string) => void
}
interface IEditor {
  focus: () => void
}



function EditorComponent({ editorRef, language, setLanguage }: EditorComponentProps) {
  const [value, setValue] = useState('')
  const handleValueChange = (newValue: string | undefined) => {
    setValue(newValue || '')
    console.log(newValue)
  }

  const handleEditorDidMount = (editor: IEditor) => {
    editorRef.current = editor
    editor.focus()
  }

  const handleSelect = (language: string) => {
    setLanguage(language)
    setValue(
      CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]
    )
  }
  return (
    <div className="w-full h-fit">

      <LanguageSelector onSelect={handleSelect} language={language} />
      <div className='mt-4 bg-n-6 border border-n-6  rounded-t-2xl
        p-2
      '>
        <span
          className='w-full px-4 
          text-n-1 font-bold text-sm lg:text-base lg:px-8 lg:py-4 lg:rounded-[3.5rem] lg:font-bold  lg:leading-6 lg:tracking-[0.02em]  lg:uppercase lg:transition-colors transition ease-in-out delay-150'
        >Code</span>
      </div>
      <Editor
        height="42vh"
        theme="vs-dark"
        className="h-[40vh] rounded-b-2xl border border-n-6 bg-n-8 overflow-y-auto"
        language={language}
        defaultValue={CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]}
        onMount={handleEditorDidMount}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  )
}
export default EditorComponent
