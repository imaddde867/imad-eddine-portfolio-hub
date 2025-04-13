import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendSubscriptionEmail = async (subscriberEmail: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'imadeddine200507@gmail.com',
    subject: 'New Newsletter Subscription',
    text: `New subscriber: ${subscriberEmail}`,
    html: `
      <h2>New Newsletter Subscription</h2>
      <p>A new user has subscribed to your newsletter:</p>
      <p><strong>Email:</strong> ${subscriberEmail}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}; 