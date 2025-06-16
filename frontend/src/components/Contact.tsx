import { MapPin, Phone, Mail, Clock, MoveRight, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/api/send-email', {
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
    <section id="contacto" className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-start gap-32 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit} 
            className="w-full md:w-1/2 space-y-6 bg-white shadow-2xl p-10 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Contáctenos</h2>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#edbb5f] focus:border-transparent"
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
              className="relative group w-full bg-black text-[#edbb5f] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </span>
                <MoveRight className="w-5 h-5" />
              </div>
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
              <div>
                <h3 className="font-semibold text-lg mb-2">Nuestra Oficina</h3>
                <p className="text-gray-600">Uruguay 485, piso 7, oficina B</p>
                <p className="text-gray-600">A una cuadra del Palacio de Justicia</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Phone className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Teléfonos</h3>
                <p className="text-gray-600">2198-8391</p>
                <p className="text-gray-600">5950-3654</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Mail className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Correo Electrónico</h3>
                <p className="text-gray-600">villahoz@escribaniavillahoz.com.ar</p>
                <p className="text-gray-600">contacto@escribaniavillahoz.com.ar</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="bg-black p-4 rounded-full">
                <Clock className="w-6 h-6 text-[#edbb5f]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Horario</h3>
                <p className="text-gray-600">Lunes a Viernes</p>
                <p className="text-gray-600">9 a 17 hs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;