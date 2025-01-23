const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Ruta para enviar correos
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Configuración del transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Usa tu servicio de correo, puede ser Gmail, Outlook, etc.
    auth: {
      user: 'tu-correo@gmail.com', // Tu dirección de correo
      pass: 'tu-contraseña-app' // Contraseña de la aplicación (no la normal)
    }
  });

  const mailOptions = {
    from: email,
    to: 'gerardmcastro20@gmail.com', // Tu correo
    subject: `Nuevo mensaje de: ${name} - ${subject}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
});

// Inicia el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
