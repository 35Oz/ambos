import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';


const WhatsAppButton = () => {
  const phoneNumber = '+541152578582';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center bg-green-500 w-14 h-14 rounded-full shadow-lg 
                      hover:bg-green-600 transition-all duration-300 ease-in-out
                      hover:scale-110 hover:shadow-xl">
        <FaWhatsapp size={28} className="text-white" />
      </div>
    </a>
  );
};

export default WhatsAppButton;