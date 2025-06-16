import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react'; 
import img1 from '../assets/images/offices/1.jpg';
import img2 from '../assets/images/offices/2.jpg';
import img3 from '../assets/images/offices/3.jpg';
import img4 from '../assets/images/offices/4.jpg';
import img5 from '../assets/images/offices/5.jpg';
import divider from '../assets/images/dividers/divider.svg';
import divider2 from '../assets/images/dividers/dividerPath2.svg';

const imagesColumn1 = [img1, img2];
const imagesColumn2 = [img3, img4, img5];

const OfficeSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null); 

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section className="">
      <div>
                <img
                src={divider2}
                alt="Divider Path"
                className="w-full h-[20vh] "
                />
            </div>       
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-28">
        <div className='sm:px-6 lg:px-28'>
          <h1 className="font-bold text-[32px] sm:text-[40px] md:text-[45px] text-center">
            Nuestra Oficina
          </h1>
          <span className="text-medium text-[16px] sm:text-[18px] lg:text-[22px] text-center font-medium text-gray-800">
            <p className="text-center">
              Ofrecemos una amplia sala de firmas y reuniones, apta para cumplir
              las instrumentaciones necesarias y los protocolos Covid.
            </p>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mt-12 px-16 sm:px-16 md:px-24 lg:px-24">
          <div id="column1" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
            {imagesColumn1.map((image, index) => (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredImage(image)} 
                onMouseLeave={() => setHoveredImage(null)} 
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-auto object-cover border-black border-[3px] cursor-pointer"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleImageClick(image)}
                  style={{
                    filter: hoveredImage === image ? 'brightness(0.50)' : 'none',
                    transition: 'filter 0.3s ease'
                  }}
                />
                {hoveredImage === image && ( 
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Maximize2 size={40} className="hover:cursor-pointer text-[#edbb5f]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div id="column2" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
            {imagesColumn2.map((image, index) => (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredImage(image)} 
                onMouseLeave={() => setHoveredImage(null)}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }} 
              >
                <motion.img
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-auto object-cover border-black border-[3px] cursor-pointer"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleImageClick(image)}
                  style={{
                    filter: hoveredImage === image ? 'brightness(0.5)' : 'none',
                    transition: 'filter 0.3s ease'
                  }}
                />
                {hoveredImage === image && ( 
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Maximize2 size={40} className="hover:cursor-pointer text-[#edbb5f]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <img 
          src={divider}
          alt="Divider"
          className="w-full h-[14vh] sm:h-[15vh] md:h-[12vh] lg:h-[19vh] mt-14"
        />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: imagesColumn1.includes(selectedImage) ? 0.9 : 0.6, // Ajuste según la columna
                opacity: 1,
              }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedImage}
                alt="Imagen Ampliada"
                className="w-full h-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OfficeSection;
