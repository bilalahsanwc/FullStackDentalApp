import {
  TransactionalEmailsApi,
  SendSmtpEmail,
  TransactionalEmailsApiApiKeys,
} from "@getbrevo/brevo";

const apiInstance = new TransactionalEmailsApi();

apiInstance.setApiKey(
  TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const sendEmail = async ({ subject, html }) => {
  const email = new SendSmtpEmail();

  email.sender = {
    name: "Loyal Dentistry Website",
    email: process.env.EMAIL_USER,
  };

  email.to = [
    {
      email: process.env.CLINIC_EMAIL,
    },
  ];

  email.subject = subject;
  email.htmlContent = html;

  await apiInstance.sendTransacEmail(email);
};

export const sendAppointmentEmail = async ({
  firstName,
  lastName,
  email,
  phone,
  preferredDays,
  preferredTimings,
  additionalInfo,
}) => {
  await sendEmail({
    subject: "🦷 New Appointment Request",

    html: `
  <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e5e5;">
      
      <div style="background:#0f172a; color:white; padding:20px; text-align:center;">
        <h2 style="margin:0;">New Appointment Request</h2>
        <p style="margin:5px 0 0; font-size:13px; opacity:0.8;">
          Loyal Dentistry Website
        </p>
      </div>

      <div style="padding:20px;">

        <h3 style="margin-bottom:10px; color:#0f172a;">Patient Details</h3>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr>
            <td style="padding:8px; font-weight:bold;">Name</td>
            <td style="padding:8px;">${firstName} ${lastName}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px; font-weight:bold;">Email</td>
            <td style="padding:8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Phone</td>
            <td style="padding:8px;">${phone}</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td style="padding:8px; font-weight:bold;">Preferred Days</td>
            <td style="padding:8px;">${preferredDays.join(", ")}</td>
          </tr>
          <tr>
            <td style="padding:8px; font-weight:bold;">Preferred Time</td>
            <td style="padding:8px;">${preferredTimings.join(", ")}</td>
          </tr>
        </table>

        <div style="margin-top:20px;">
          <h4 style="margin-bottom:5px;">Additional Information</h4>
          <p style="margin:0; color:#555;">
            ${additionalInfo || "No additional information provided."}
          </p>
        </div>

      </div>

      <div style="background:#f3f4f6; padding:12px; text-align:center; font-size:12px; color:#666;">
        Auto-generated message from website appointment system
      </div>

    </div>
  </div>

    `,
  });
};

export const sendContactEmail = async ({ name, phone, message }) => {
  await sendEmail({
    subject: "📩 New Contact Form Message",

    html: `
  <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e5e5;">

      <div style="background:#1e293b; color:white; padding:20px; text-align:center;">
        <h2 style="margin:0;">New Contact Message</h2>
      </div>

      <div style="padding:20px; font-size:14px;">

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr style="border:none; border-top:1px solid #eee; margin:15px 0;" />

        <h4 style="margin-bottom:5px;">Message</h4>
        <p style="color:#444; line-height:1.5;">
          ${message}
        </p>

      </div>

      <div style="background:#f3f4f6; padding:12px; text-align:center; font-size:12px; color:#666;">
        Sent from contact form on website
      </div>

    </div>
  </div>
  `,
  });
};
