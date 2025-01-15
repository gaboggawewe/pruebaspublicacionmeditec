import nodemailer from 'nodemailer';

export async function post({ request }) {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate the form data (optional but recommended)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'All fields are required.' }),
        { status: 400 }
      );
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Replace with your SMTP host
      port: 465, // Typically 587 for TLS
      secure: true,
      auth: {
        user: 'general@meditecccm.com', // Your SMTP email
        pass: 'Heladodechocolate*54', // Your SMTP password
      },
    });

    // Compose the email
    const mailOptions = {
      from: `${name} <${email}>`, // Sender info
      to: 'general@meditecccm.com', // Replace with the recipient email
      subject: `Mensaje de ${name}`, // Subject line
      text: `Has recibido un mensaje de contacto:\n\nNombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
