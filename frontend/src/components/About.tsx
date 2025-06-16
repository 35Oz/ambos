import { motion } from 'framer-motion';
import "@fontsource/montserrat";

import about from '../assets/images/about.jpg';
import divider from '../assets/images/dividers/dividerPath.svg';
import { Link } from 'react-router-dom';

import { ChevronsDown } from 'lucide-react';

const About = () => {
  return (
    <section id="quiénes-somos" className="mt-40">
      <div className="flex flex-col md:flex-row my-5 mx-auto max-w-6xl gap-16 px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-3/5"
        >
          <img
            src={about}
            alt="Escribanía Villahoz"
            className="shadow-lg w-full h-auto object-cover border border-black border-[3px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-3/5"
        >
          <div >
          <h2 className="text-[16px] font-alegreya tracking-normal text-[#555555]">
            QUIÉNES SOMOS 
          </h2>
          <h1 className="text-[45px]  mb-2 tracking-normal font-bold text-gray-800">
            Escribania Villahoz
          </h1>
          <div className="w-36 h-0.5 bg-[#ffe7a8] mb-2"></div>
            <p className="text-left text-[17px] text-gray-800 mb-1">
              Somos una escribanía con más de diez años en el ejercicio de la profesión brindando asesoramiento personalizado a todos nuestros requirentes otorgando seguridad jurídica a sus negocios.
            </p>
            <p className="text-left text-[17px] text-gray-800 mb-6">
            Siempre con un trato cordial y exclusivo. La experiencia y preparación académica de la Escribana Villahoz avalan su trayectoria.
            </p>
            <Link
              to="/trayectoria"
              className="relative group shadow-custom inline-flex items-center gap-2 bg-[#ffe7a8] text-gray-900 px-6 py-3 rounded-lg 
              border-2 border-black transition-all duration-300 hover:bg-[#ffe7a8]/90 hover:border-transparent hover:pl-8 hover:pr-12"
              style={{ width: 'auto' }}
            >
              <span className="relative z-10 transform transition-transform duration-500 group-hover:-translate-x-3">
                TRAYECTORIA
              </span>
              <ChevronsDown
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 rounded-full text-[#ffe7a8] 
                opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ width: '20px', height: '20px' }}
              />
            </Link>
          </div>
        </motion.div>
      </div>
      <div>
        <img
          src={divider}
          alt="Divider Path"
          className="w-full h-[16vh] "
        />
      </div>
    </section>
  );
};

export default About;