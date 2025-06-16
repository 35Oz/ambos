const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  'http://localhost:5173',
  'https://ambos-1.onrender.com'
];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.post('/api/send-email', async (req, res) => {
  try {
    console.log('BODY RECIBIDO:', req.body);
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    await axios.post('https://api.resend.com/emails', {
      from: 'onboarding@resend.dev',
      to: 'ezediaz321@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    res.json({ message: 'Mensaje enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);

    if (error.response) {
      console.error('Respuesta del servidor de correo:', error.response.data);
      res.status(error.response.status).json({
        error: `Error al enviar el mensaje. Detalles: ${error.response.data}`
      });
    } else if (error.request) {
      console.error('Error de solicitud al servicio de correo:', error.request);
      res.status(500).json({
        error: 'Error en la solicitud al servicio de correo. Intente más tarde.'
      });
    } else {
      console.error('Error desconocido:', error.message);
      res.status(500).json({
        error: 'Error interno del servidor. Por favor, intente nuevamente más tarde.'
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
