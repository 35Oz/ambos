import { motion } from 'framer-motion';
import { SquarePen } from 'lucide-react';

const Downloads = () => {
  return (
    <section id='descargas'>
      <div className="w-full">
          <div className="bg-custom-yellow w-full h-auto min-h-[276px] flex justify-center items-center pt-4 px-4">
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
            <div className="gap-10 flex flex-col md:flex-row w-full max-w-[1200px] mx-auto justify-center mt-12">
              <div className="w-full md:w-auto max-w-[274.58px] text-center md:text-left mx-auto">
                <h1 className="font-bold text-[28px] text-[rgba(10,5,5,0.71)] [text-shadow:0.08em_0.08em_0.08em_rgba(0,0,0,0.4)] leading-tight">
                  Descargue las fichas de datos personales desde estos links.
                </h1>
              </div>

              <div className="w-full max-w-[320.58px] text-center relative group transition-all duration-300 mx-auto">
                <a
                  href="/assets/files/FICHA-DE-DATOS-PERSONALES.doc"
                  className="block border-[4px] border-[rgba(10,5,5,0.71)] hover:border-transparent rounded-2xl bg-transparent p-4 text-[20px] text-center font-medium text-[rgba(10,5,5,0.71)] relative overflow-hidden transition-all duration-300 hover:bg-black hover:bg-opacity-10 group-hover:shadow-lg"
                  download
                >
                  <span className="relative z-10 inline-block transform p-1 transition-transform duration-500 group-hover:-translate-x-4">
                    FICHA DE DATOS PERSONALES
                  </span>
                  <SquarePen
                    className="absolute bottom-1 left-[190px] transform -translate-y-1/2 opacity-0 group-hover:left-[calc(66%+15px)] group-hover:opacity-100 transition-all duration-500"
                    style={{ width: '24px', height: '24px' }}
                  />
                </a>
              </div>

              <div className="w-full max-w-[330.58px] text-center relative group transition-all duration-300 mx-auto">
                <a
                  href="assets/files/FICHA-DE-DATOS-PERSONALES-PARA-CERTIFICAR.doc"
                  className="block border-[4px] border-[rgba(10,5,5,0.71)] hover:border-transparent rounded-2xl bg-transparent p-4 text-[20px] text-center font-medium text-[rgba(10,5,5,0.71)] relative overflow-hidden transition-all duration-300 hover:bg-black hover:bg-opacity-10 group-hover:shadow-lg"
                  download
                >
                  <span className="relative z-10 inline-block transform p-1 transition-transform duration-500 group-hover:-translate-x-4">
                    FICHA DE DATOS PERSONALES PARA CERTIFICAR
                  </span>
                  <SquarePen
                    className="absolute bottom-1 left-[210px] transform -translate-y-1/2 opacity-0 group-hover:left-[calc(70%+15px)] group-hover:opacity-100 transition-all duration-500"
                    style={{ width: '24px', height: '24px' }}
                  />
                </a>
              </div>
            </div>
        </motion.div>
          </div>
      </div>
    </section>
  );
};

export default Downloads;
