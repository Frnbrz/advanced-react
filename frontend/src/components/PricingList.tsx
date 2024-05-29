import Button from "@/components/Button"
import { check } from "../assets"
import { pricing } from "../constants"

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">

      {pricing.map((item) => (

        <div

          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-7 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3  shadow-n-1/30 hover:shadow-n-1/40 transition-shadow duration-300 ease-in-out *:last:mb-0"
          key={item.id}>

          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
                <div className="
                  text-4xl
                 ml-2">€</div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:admin@devcode.com"}
            white={!!item.price}
          >
            {item.price ? "Empieza ahora" : "Contacta con nosotros"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default PricingList