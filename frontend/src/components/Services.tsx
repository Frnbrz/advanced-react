import { devcodeServices } from "@/constants"
import { check, service1, service2, service3 } from "../assets"
import {
  Gradient,
  PhotoChatMessage,
  VideoChatMessage
} from "./design/Services"
import Heading from "./Heading"
import Section from "./Section"

import { ScrollParallax } from "react-just-parallax"
import Generating from "./Generating"

const Services = () => {
  return (
    <Section id="how-to-use" crosses
      crossesOffset='lg:translate-y-[5.25rem]'>
      <div className="container">
        <Heading
          title="Desbloquea el potencial de la nueva forma de Entrevista de Trabajo"
          text="DevCode es una plataforma de entrevistas de trabajo que te permite realizar entrevistas de trabajo de forma remota y en tiempo real. "
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Conectar con la empresa</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Nueva forma de conectar con la empresa y realizar entrevistas de trabajo de forma remota y en tiempo real.
              </p>
              <ul className="body-2">
                {devcodeServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Entrevista Tecnica</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Nueva forma de realizar entrevistas técnicas de trabajo de forma remota y en tiempo real.
                </p>
              </div>
              <ScrollParallax isAbsolutelyPositioned>
                <PhotoChatMessage />
              </ScrollParallax>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">
                  Conexion con la empresa
                </h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  De forma remota y en tiempo real.
                </p>

              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <VideoChatMessage />
                </ScrollParallax>


              </div>

            </div>

          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  )
}

export default Services