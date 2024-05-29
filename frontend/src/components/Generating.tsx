import { loading } from "../assets"

interface GeneratingProps {
  className?: string
}

const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={`flex items-center  h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""
        } text-base`}
    >

      {/* make it spin while loading */}

      <img className="w-5 h-5 mr-4
      animate-spin 
      " src={loading} alt="Loading" />
      <span className="text-n-2 pl-2">Generando preguntas...</span>
    </div>
  )
}

export default Generating
