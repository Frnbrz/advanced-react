import Button from '@/components/Button'
import { LANGUAGES } from '@/constants'
import { useState } from 'react'

const languages = Object.entries(LANGUAGES)
interface LanguageSelectorProps {
  onSelect: (language: string) => void
  language: string
}

const ACTIVE_COLOR = 'blue-400'

function LanguageSelector({ onSelect, language }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='mb-4 ml-2'>
      <div className='relative inline-block'>
        <Button onClick={() => setIsOpen(!isOpen)} white>
          {language}
          {isOpen && (
            <div
              className='absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-n-8 w-max z-50 shadow-lg border border-n-6'
            >
              <ul className='flex flex-col p-2'>
                {languages.map(([lang, version]) => (
                  <li
                    className={`text-n-1 block px-4 py-2 text-sm ${language === lang
                      ? `text-${ACTIVE_COLOR} bg-gray-700`
                      : ''
                      }`}
                    key={lang}
                    onClick={() => onSelect(lang)}
                  >
                    {lang}
                    &nbsp;
                    <span className='text-n-2 text-sm'>{version}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Button>
      </div>
    </div>
  )
}

export default LanguageSelector
