import { devcodeWhiteSymbol, gradient, play } from '../../assets'
import ChatBubbleWing from '../../assets/svg/ChatBubbleWing'

export const Gradient = () => {
  return (
    <div className='absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none'>
      <img
        className='absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2'
        src={gradient}
        width={1417}
        height={1417}
        alt='Gradient'
      />
    </div>
  )
}

export const PhotoChatMessage = () => {
  return (
    <div className='absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]'>
      Hola, me gustaria realizar una entrevista técnica.
      <ChatBubbleWing className='absolute left-full bottom-0' />
    </div>
  )
}

export const VideoChatMessage = () => {
  return (
    <div className='absolute top-8 left-[3.125rem] w-full max-w-[60rem] pt-2.5 pr-2 pb-2.5 pl-5  bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-min flex flex-row items-center justify-center'>
      <div className='  flex  items-center justify-center w-[2.75rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]'>
        <img
          src={devcodeWhiteSymbol}
          width={26}
          height={26}
          alt='DevCode'
        />
      </div>
      <span
        className='ml-2.5 text-n-1
        w-full text-ellipsis first-letter:uppercase
        overflow-hidden whitespace-nowrap
        '
      >
        conexión con la empresa
      </span>

      <p className='tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase'>
        ahora
      </p>
      <ChatBubbleWing
        className='absolute right-full bottom-0 -scale-x-100'
        pathClassName='fill-n-6'
      />
    </div>
  )
}

export const VideoBar = () => {
  return (
    <div className='absolute left-0 bottom-0 w-full flex items-center p-6'>
      <img
        src={play}
        width={24}
        height={24}
        alt='Play'
        className='object-contain mr-3'
      />

      <div className='flex-1 bg-[#D9D9D9]'>
        <div className='w-1/2 h-0.5 bg-color-1'></div>
      </div>
    </div>
  )
}
