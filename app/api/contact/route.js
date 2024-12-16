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

    console.log("Parsed data:", { name, email, message, cc, bcc }); // Log data for debugging

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@zeplinix.com",
        pass: "admin@3Tyt887",
      },
    });

    // Define the HTML email template (same as before)
    const htmlTemplate = ` <div
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
      src="https://zeplinix.co.in/zeplinix-images/second/z-logo.png"
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
</div>`; // Your existing HTML template

    // Define the email options
    const mailOptions = {
      from: '"Zeplinix Support" <info@zeplinix.com>',
      to: email,
      subject: "Thank you for contacting us!",
      html: htmlTemplate,
      cc: cc || "vidhan@zeplinix.com, manasi@zeplinix.com,",
      bcc:
        bcc ||
        "abhijitp@301io.com,atmaramd@301io.com,sagar@zeplinix.com,abhishek.deshmukh@zeplinix.com",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info); // Log the response from the email server

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
      }
    );
  }
}
