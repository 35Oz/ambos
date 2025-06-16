import { motion } from 'framer-motion';

import service1 from '../assets/images/services/service1.jpg';
import service2 from '../assets/images/services/service2.jpg';
import service3 from '../assets/images/services/service3.jpg';
import service4 from '../assets/images/services/service4.jpg';
import service5 from '../assets/images/services/service5.jpg';
import logo from '../assets/images/services/serviceLogo.jpg';

import divider from '../assets/images/dividers/divider.svg';
import divider2 from '../assets/images/dividers/divider2.svg';
import divider3 from '../assets/images/dividers/divider3.svg';

import { SquarePen } from 'lucide-react';

const services = [
  {
    image: service1,
    title: 'Organización Familiar',
    description: 'Testamentos, renuncia y cesión de herencia, Partición hereditaria, Adjudicación de bienes por divorcio o cambio de régimen, Convenciones matrimoniales, pactos convivenciales, Autorizaciones de viajes a menores, de manejo, Actas de comprobación, Poderes.',
  },
  {
    image: service2,
    title: 'Inmuebles',
    description: 'Compraventa, hipoteca, donación, usufructo, propiedad horizontal, permuta, Fideicomisos, Protocolización de subastas, Habilitaciones comerciales.',
  },
  {
    image: service3,
    title: 'Organización Societaria',
    description: 'Constitución, modificación o disolución, nombramientos de autoridades, rúbrica de libros, distractos laborales.',
  },
  {
    image: service4,
    title: 'Actos Extra Protocolares',
    description: 'Certificación de firmas en contratos, formularios, notas, fotocopias, certificados de supervivencia y domicilio, estudios de títulos.',
  },
  {
    image: service5,
    title: 'Mediación',
    description: 'Daños y perjuicios, incumplimiento contractual, nulidad de asamblea, otros.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="bg-gray-50">
      <div className="relative">
        <img
          src={logo}
          alt="Información Notarial"
          className="w-full h-[80vh] object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-800/40 to-transparent"
          aria-hidden="true"
        ></div>

        <img 
          src={divider}
          alt="Divider"
          className="absolute bottom-0 left-0 w-full h-[13vh] z-10"
        />
        <img 
          src={divider2}
          alt="Divider 2"
          className="absolute bottom-[-12vh] left-0 w-full h-[12vh] z-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-24 mt-28">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[30px] sm:text-[45px] text-gray-900 font-bold mb-4 text-center">
            Nuestros Servicios
          </h2> 
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 text-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.image}
                className="border rounded-md w-full h-auto mx-auto"
              />
              <div className="mt-6 bg-white p-4 sm:p-8 rounded-lg shadow-[0px_2px_70px_0px_rgba(110,130,208,0.18)]">
                <h3 className="text-[19px] sm:text-[22px] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <img 
        src={divider3}
        alt="Divider 3"
        className="top-[3000px] left-0 w-full h-[12vh] mt-20"
      />

      <div className="bg-custom-yellow h-auto min-h-[276px] flex justify-center items-center pt-4 pb-4 px-4 py-8">
        <div className="gap-10 flex flex-col md:flex-row w-full max-w-[1200px] mx-auto py-4 justify-center">
          <div className="w-full md:w-auto mb-6 md:mb-0 max-w-[274.58px] text-center md:text-left mx-auto">
            <h1 className="font-bold text-[28px] text-[rgba(10,5,5,0.71)] [text-shadow:0.08em_0.08em_0.08em_rgba(0,0,0,0.4)] leading-tight justify-center">
              Descargue las fichas de datos personales desde estos links.
            </h1>
          </div>

          <div className="w-full max-w-[320.58px] text-center relative group transition-all duration-300 group-hover:w-[220px] mx-auto">
            <a
              href="/assets/files/FICHA-DE-DATOS-PERSONALES.doc"
              className="block border-[4px] border-[rgba(10,5,5,0.71)] hover:border-transparent rounded-2xl bg-transparent p-4 mx-2 text-[20px] text-center font-medium text-[rgba(10,5,5,0.71)] relative overflow-hidden transition-all duration-300 hover:bg-black hover:bg-opacity-10 group-hover:shadow-lg"
              download
            >
              <span className="relative z-10 inline-block transform transition-transform duration-500 group-hover:-translate-x-4">
                FICHA DE DATOS PERSONALES
              </span> 
              <SquarePen
                className="absolute bottom-1 left-[190px] transform -translate-y-1/2 opacity-0 group-hover:left-[calc(66%+15px)] group-hover:opacity-100 transition-all duration-500"
                style={{ width: '24px', height: '24px' }} 
              />
            </a>
          </div>

          <div className="w-full max-w-[330.58px] text-center relative group transition-all duration-300 group-hover:w-[220px] mx-auto">
            <a
              href="assets/files/FICHA-DE-DATOS-PERSONALES-PARA-CERTIFICAR.doc"
              className="block border-[4px] border-[rgba(10,5,5,0.71)] hover:border-transparent rounded-2xl bg-transparent p-4 mx-1 text-[20px] text-center font-medium text-[rgba(10,5,5,0.71)] relative overflow-hidden transition-all duration-300 hover:bg-black hover:bg-opacity-10 group-hover:shadow-lg"
              download
            >
              <span className="relative z-10 inline-block transform transition-transform duration-500 group-hover:-translate-x-4">
                FICHA DE DATOS PERSONALES PARA CERTIFICAR
              </span>
              <SquarePen
                className="absolute bottom-1 left-[210px] transform -translate-y-1/2 opacity-0 group-hover:left-[calc(70%+15px)] group-hover:opacity-100 transition-all duration-500"
                style={{ width: '24px', height: '24px' }} 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;