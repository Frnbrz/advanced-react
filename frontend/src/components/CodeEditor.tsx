import { Box, HStack } from "@chakra-ui/react"
import { useRef, useState } from "react"
import EditorComponent from "./EditorComponent"
import Output from "./Output"




interface IEditor {
  focus: () => void
}



interface IEditor {
  focus: () => void
  getValue: () => string | undefined
}

function CodeEditor() {
  const [language, setLanguage] = useState('javascript')
  const editorRef = useRef<IEditor | null>(null)
  return (
    <Box>
      <HStack spacing={4}>
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
      </HStack>
    </Box>
  )
}
export default CodeEditor