import ButtonSvg from "../assets/svg/ButtonSvg"

interface ButtonProps {
  className?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  px?: string
  white?: boolean,
  isLoading?: boolean
  animate?: boolean
  outline?: boolean
}

function Button({ className, href, onClick, children, px, white, isLoading, animate, outline }: ButtonProps) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-4"
    } ${white ? "text-n-8" : "text-n-1"} ${className || ""}
    hover:bg-n-8 hover:bg-opacity-10 rounded-[2.5rem] text-n-1 font-bold text-sm lg:text-base lg:px-2 lg:py-1 lg:rounded-[3.5rem] lg:font-bold lg:text-md lg:leading-6 lg:tracking-[0.02em] lg:font-bold lg:uppercase lg:transition-colors transition ease-in-out delay-150 
    
    min-w-[8rem] 
    ${animate ? "hover:-translate-y-1 hover:scale-110  duration-300" : ""}
    ${outline ? "border border-n-1" : ""}
    `



  const spanClasses = `relative z-10 ${white ? "text-n-8" : "text-n-1"}`


  const renderButton = () => (
    <button className={classes} onClick={onClick}
      disabled={isLoading}>

      {
        isLoading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-t-[3px] border-n-1 rounded-full animate-spin"></div>
          </div>
        ) : <>
          <span className={spanClasses}>{children}</span>
        </>
      }
      {ButtonSvg(white || false)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white || false)}
    </a>
  )

  return href ? renderLink() : renderButton()
}
export default Button
