import { motion } from 'framer-motion';

import hero from '../assets/images/hero.jpg';
import logo from '../assets/images/logo2.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-[940px]">
      <div className="absolute inset-0">
        <img 
          src={hero} 
          alt="hero-image" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-end justify-center pb-[20%] md:pb-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white text-center flex flex-col items-center"
        >
           <img
              src={logo}
              alt="Logo"
              className="mx-auto" 
            />
          <h1 className="text-5xl md:text-6xl mb-10 text-[#ffe7a8] hidden md:block mt-3">
            BIENVENIDOS
          </h1>
          <p className="text-xl md:text-lg mb-8 text-gray-300">
            En Escribanía Villahoz brindamos el asesoramiento jurídico notarial adecuado a los intereses de nuestros requirentes. La escribanía ofrece atención directa y personalizada en todos los casos. Contamos con un servicio de turnos para su mejor atención; como así también, servicio notarial a domicilio, en caso que sea requerido exclusivamente dentro del ámbito de la Ciudad de Buenos Aires.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-transparent px-4 py-2 md:px-5 md:py-1 rounded-lg font-medium border-2 md:border-[3px] 
              text-base sm:text-lg md:text-xl border-[#ffe7a8] text-[#ffe7a8] hover:bg-[#ffe7a8]/90 hover:text-black 
              transition-colors mb-16 md:mb-8"
          >
            PEDÍ UNA CITA
          </a>
        </motion.div>
      </div>
 
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-[90%] md:w-full max-w-xl">
        <div className="bg-[#ffe7a8] border-2 rounded-lg border-black text-center py-3 md:py-4 px-4">
          <p className="text-sm md:text-lg font-medium text-black">
            <span className="block md:inline">Teléfono: 2198-8391</span>
            <span className="hidden md:inline"> | </span>
            <span className="block md:inline">Horarios: Lunes a Viernes de 10 a 17hs.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;