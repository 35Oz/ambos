import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-[500px] "
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.024498997771!2d-58.390474587452225!3d-34.60385175644388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac68efc1097%3A0x7373e95e8c36637d!2sUruguay%20485%2C%20C1015%20ABI%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1737063426501!5m2!1ses-419!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </motion.div>
  );
};

export default Map;