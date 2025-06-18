import { MapPin, Phone, Mail, Clock, MoveRight, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Map from './Map';
import axios from 'axios';
import '@fontsource/poppins';
import divider from '../assets/images/dividers/divider7.svg';
import divider2 from '../assets/images/dividers/divider8.svg';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
  
      return () => clearTimeout(timer);
    }
  }, [error, successMessage]);

  const refreshCaptcha = () => {
    setCaptchaCode(generateCaptchaCode());
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const generateCaptchaCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
  };
  useEffect(() => {
    setCaptchaCode(generateCaptchaCode());
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    if (captchaInput !== captchaCode) {
      setError('El código CAPTCHA es incorrecto');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://ambos.onrender.com/api/send-email', {
        ...formData
        
      });

      if (response.status === 200) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setCaptchaInput('');
        refreshCaptcha();
        setSuccessMessage('El mensaje ha sido enviado correctamente.');
      }
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.response?.data?.error || 'No se pudo enviar el mensaje. Intenta nuevamente.');
      setSuccessMessage('');
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative  bg-gray-50">
        <img 
        src={divider}
        alt="Divider"
        className="absolute w-full h-[16vh] sm:h-[15vh] md:h-[12vh] lg:h-[19vh] z-10 transition-opacity duration-500"
      />
      <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
        <Map />
      </motion.div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-center items-start gap-32 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="w-full md:w-1/2 space-y-6 bg-white shadow-2xl p-10 "
          >
             
            <h2 className="text-4xl font-bold text-center mb-8 font-playfair">CONTÁCTENOS</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="NOMBRE"
                className="w-full border-b border-gray bg-transparent focus:outline-none py-2 placeholder:text-black"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="CORREO ELECTRÓNICO"
                className="w-full border-b border-gray bg-transparent focus:outline-none py-2 placeholder-black"
              />
            </div>

            <div>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="NÚMERO DE WHATSAPP"
                className="w-full border-b border-gray bg-transparent focus:outline-none py-2 placeholder-black"
              />
            </div>

            <div>

              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="MENSAJE"
                className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent placeholder-black"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 text-lg font-bold bg-gray-100 rounded">
                  {captchaCode}
                </span>
                <button 
                  type="button" 
                  onClick={refreshCaptcha}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Ingrese el código CAPTCHA"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent"
                required
              />
            </div>
            {successMessage && (
              <div className="fixed  top-16 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-lg shadow-lg">
                <p>{successMessage}</p>
              </div>
            )}
            {error && (
              <p className="fixed  top-16 left-1/2 transform -translate-x-1/2 p-4 bg-red-500 text-white rounded-lg shadow-lg">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="relative group inline-flex items-center gap-2 bg-black text-[#edbb5f] px-6 py-3 
                border-2 border-black transition-all duration-300 hover:border-transparent hover:pl-8 hover:pr-12 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 transform transition-transform duration-500 group-hover:-translate-x-3">
                {loading ? 'Enviando...' : 'Enviar'}
              </span>

              <MoveRight
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[# edbb5f]
                opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-12"
          >
            <div className="flex items-center space-x-6">
              <div className="bg-black p-3 rounded-full">
                <MapPin className="w-8 h-8 text-[#edbb5f]" />
              </div>
              <div >
                <h3 className="font-semibold text-lg mb-2">NUESTRA OFICINA</h3>
                <p className="text-gray-600">Ayacucho 984 6to A</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Phone className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">TELÉFONOS</h3>
                <p className="text-gray-600">2198-8391</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Mail className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">MAILS</h3>
                <p className="text-gray-600">vivianavillahoz@hotmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Clock className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">HORARIO</h3>
                <p className="text-gray-600">Lunes a Viernes</p>
                <p className="text-gray-600">10 a 17 hs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <img 
        src={divider2}
        alt="Divider"
        className="left-0 w-full h-[100px] " 
      />


    </section>
  );
};

export default Contact;