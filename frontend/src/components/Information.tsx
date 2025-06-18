import React, { useState } from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';


import img from '../assets/images/information/informationbackground.jpg';
import info1 from '../assets/images/information/USADA-1.jpg'
import info2 from '../assets/images/information/Cesion-de-Derechos-Hereditarios.jpg'
import info3 from '../assets/images/information/Convencion-Matrimonial.jpg'
import info4 from '../assets/images/information/Estudios-de-Titulo.jpg'
import info5 from '../assets/images/information/Boleto-de-Compraventa-1024x684.jpg'
import info6 from '../assets/images/information/Testamento-1024x683.jpg'
import info7 from '../assets/images/information/Donacion.jpg'
import info8 from '../assets/images/information/Tecnicas-de-Reproduccion-Asistida.jpg'

import { AnimatePresence, motion } from 'framer-motion';


const Information = () => {

  const info = [
    {
      title : 'Afectación a la Protección de la Vivienda',
      img: info1,
      description: 'Reemplaza el antiguo régimen de Bien de Familia con ciertas modificaciones que resultan beneficiosas en estos tiempos y resultan más acordes a los nuevos paradigmas sociales. Se requiere solo la voluntad del propietario para afectar al régimen y puede ser el “único” beneficiario; no siendo necesario que se configure “la familia” que requería la anterior legislación. Si usted es propietario de un inmueble en el cual habita podrá proteger su vivienda.'
    },
    {
      title : 'Cesión de Derechos Hereditarios',
      img: info6,
      description: 'Ocurrido el fallecimiento de una persona, sus herederos legitimarios (ascendientes, descendientes y cónyuge) quedan investidos de la calidad de herederos de pleno derecho desde el día del fallecimiento, y podrán ceder la universalidad de sus derechos sucesorios sin necesidad de contar previamente la declaratoria de herederos y deberán formalizarlo mediante la escritura pública.'
    },
    {
      title : 'Convención Matrimonial',
      img: info3,
      description: 'Nuestra legislación actual permite  que los futuros cónyuges puedan realizar convenciones matrimoniales. En las mismas, podrán, entre otras cuestiones mencionadas en la ley, elegir el régimen patrimonial que regirá su matrimonio, que actualmente podrá ser el convencional o bien el régimen de separación de bienes incorporado en el nuevo Código Civil y Comercial de la Nación. Siendo la escritura pública la formalidad que deberá cumplimentarse.'
    },
    {
      title : 'Estudios de Títulos',
      img: info4,
      description: 'La legislación actual recepta la importancia que representa confeccionar el estudio de títulos previo a la escrituras de transmisión de bienes inmuebles. Será conveniente que el escribano efectúe conscientemente el estudio de títulos, lo cual justificará la buena fe del adquirente y brindará seguridad jurídica en las transmisiones de bienes en que intervenga.'
    },
    {
      title : 'Boleto de Compraventa',
      img: info5,
      description: 'El título suficiente para adquirir el dominio de bienes inmuebles debe revestir la formalidad requerida por la ley que es la escritura pública. Si su usted solo ha celebrado su contrato de compraventa mediante la suscripción de un boleto de compraventa, deberá formalizar la escritura pública, lo cual le evitará que la propiedad de su inmueble  dependa o pueda verse afectada por las viscisitudes que eventualmente le sucedan a la persona del vendedor.'
    },
    {
      title : 'Testamento',
      img: info2,
      description: 'Resulta de suma importancia el asesoramiento de un escribano a la hora de decidir disponer de sus bienes para después de su fallecimiento. Tanto a los efectos de cumplir con las formalidades como para conocer sobre las opciones legales que mejor se adecuen a su voluntad.'
    },
    {
      title : 'Donación',
      img: info7,
      description: 'Los padres piensan en la posibilidad de ayudar económicamente a sus hijos en vida y no que ellos tengan que esperar a su fallecimiento, todo lo cual además implicará un adelanto de su herencia. Para ello, existe la figura jurídica de la donación de bienes.  Hoy, mediante la modificación de algunos artículos del nuevo Código Civil y Comercial con la sanción de la ley 27.587, las donaciones de bienes inmuebles a los hijos constituyen títulos perfectos y deben ser formalizados por escritura pública.'
    },
    {
      title : 'Técnicas de Reproducción Humana Asistida',
      img: info8,
      description: 'Sabía que quiénes desean someterse a  tratamientos de fertilización mediante éstas técnicas deben expresar su consentimiento informado, previo y libre por escrito que el escribano protocolizará en una escritura como un medio de cumplir con la forma requerida.'
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={img}
          alt="Información Notarial"
          className="w-full h-[50vh] object-cover"
        />
        <div
         className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            >
            <h1 className="font-bold text-[50px] text-center px-4 py-2 text-[#ffe7a8]">
              INFORMACIÓN 
            </h1>
            <h1 className="font-bold text-[50px] text-center px-4 py-2 text-[#ffe7a8]">
              NOTARIAL
            </h1>
          </motion.div>
        </div>
        <div
          id="divider"
          className="absolute bottom-0 left-0 w-full h-0 border-r-[100vw] border-b-[70px] border-r-transparent border-b-white"
        ></div>
      </div>

      <div className="space-y-10 mt-10 mb-10 px-4">
        {info.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 px-6 py-6 rounded-lg shadow-md mx-auto max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">{item.title}</h1>
              <button
                onClick={() => toggleItem(index)}
                className="text-[30px]"
              >
                {expanded === index ? <ArrowDownCircle /> : <ArrowUpCircle />}
              </button>
            </div>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                className="mt-4 overflow-hidden"
                initial={{ height: 0 }}
                animate={{
                  height: 'auto',
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
              >
                  <div className="flex justify-center mb-6">
                    <img
                      src={item.img}
                      alt={`Imagen de ${item.title}`}
                      className="w-[450px] h-[300px] object-cover rounded-md"
                    />
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Information;