import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { name, email, message, cc, bcc } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // Replace with your SMTP host
      port: 587, // or 465 if using SSL
      secure: false, // Use true for port 465, false for others
      auth: {
        user: "info@zeplinix.com", // Replace with your SMTP username
        pass: "admin@3Tyt887", // Replace with your SMTP password
      },
    });

    // Define the HTML email template
    const htmlTemplate = `
      <div
  style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  "
>
  <!-- Header -->
  <div style="background-color: #f04d58; padding: 20px; text-align: center">
    <img
      src="https://your-logo-url.com/logo.png"
      alt="Zeplinix Logo"
      style="width: 150px; margin: 0 auto"
    />
  </div>

  <!-- Body -->
  <div style="padding: 20px; color: #333">
    <h1 style="font-size: 24px; margin-top: 0">
      Thank You for Your Inquiry – We’re Here to Assist
    </h1>
    <p>Hi <strong>${name}</strong>,</p>
    <p>
      ${message}
    </p>

    <div
      style="
        background-color: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
      "
    >
      <h3 style="margin: 0 0 10px">Here’s what you can expect from us:</h3>
      <ul style="list-style-type: none; padding-left: 0; color: #555">
        <li>
          • Prompt Response: Our team is reviewing your inquiry and will get
          back to you shortly.
        </li>
        <li>
          • Tailored Solutions: We ensure our offerings align with your specific
          requirements.
        </li>
        <li>
          • Commitment to Quality: Delivering excellence is at the heart of
          everything we do.
        </li>
        <li>
          • Transparent Communication: We keep you informed every step of the
          way.
        </li>
      </ul>
      <img
        src="https://your-image-url.com/image.png"
        alt="Illustration"
        style="width: 100%; margin-top: 15px; border-radius: 8px"
      />
    </div>

    <!-- Call-to-Action -->
    <div style="text-align: center; margin: 20px 0">
      <a
        href="https://your-cta-link.com"
        style="
          display: inline-block;
          padding: 12px 25px;
          background-color: #f04d58;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
        "
        >Start now</a
      >
    </div>

    <!-- Footer -->
    <p>
      If you have any additional details or questions you’d like to share, feel
      free to reply to this email or contact us directly at
      <a
        href="mailto:info@zeplinix.com"
        style="color: #f04d58; text-decoration: none"
        >info@zeplinix.com</a
      >.
    </p>
    <p>Thank you for considering Zeplinix. We look forward to assisting you!</p>
    <p style="font-size: 14px; color: #666">
      Warm regards,<br />
      Zeplinix Team
    </p>
    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0" />

    <!-- Contact Details -->
    <div style="text-align: center; color: #666; font-size: 14px">
      <p style="margin: 0">502 W 7th ST, STE 100 Erie,<br />PA 165025</p>
      <p style="margin: 0">
        Email:
        <a
          href="mailto:info@zeplinix.com"
          style="color: #f04d58; text-decoration: none"
          >info@zeplinix.com</a
        >
      </p>
      <a
        href="https://www.zeplinix.com"
        style="color: #f04d58; text-decoration: none"
        >www.zeplinix.com</a
      >
    </div>

    <!-- Social Media Icons -->
    <div style="text-align: center; margin-top: 20px">
      <a href="#" style="margin: 0 5px">
        <img
          src="https://your-icon-url.com/facebook.png"
          alt="Facebook"
          style="width: 24px"
        />
      </a>
      <a href="#" style="margin: 0 5px">
        <img
          src="https://your-icon-url.com/youtube.png"
          alt="YouTube"
          style="width: 24px"
        />
      </a>
      <a href="#" style="margin: 0 5px">
        <img
          src="https://your-icon-url.com/linkedin.png"
          alt="LinkedIn"
          style="width: 24px"
        />
      </a>
      <a href="#" style="margin: 0 5px">
        <img
          src="https://your-icon-url.com/twitter.png"
          alt="Twitter"
          style="width: 24px"
        />
      </a>
      <a href="#" style="margin: 0 5px">
        <img
          src="https://your-icon-url.com/instagram.png"
          alt="Instagram"
          style="width: 24px"
        />
      </a>
    </div>

    <!-- Disclaimer -->
    <p
      style="text-align: center; font-size: 12px; color: #999; margin-top: 20px"
    >
      You’re receiving this email because you are a subscriber of Zeplinix. If
      you feel you received it by mistake or wish to unsubscribe,
      <a href="#" style="color: #f04d58; text-decoration: none">click here</a>.
    </p>
  </div>
</div>

    `;

    // Define the email options
    const mailOptions = {
      from: '"Zeplinix Support"', // Replace with your email
      to: email, // User's email
      subject: "Thank you for contacting us!",
      html: htmlTemplate, // Use the HTML template
      cc: cc || "abhijitp@301io.com", // Add CC if provided
      bcc: bcc || "atmaramd@301io.com", // Add BCC if provided
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
