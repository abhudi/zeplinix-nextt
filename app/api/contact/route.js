import nodemailer from "nodemailer";
import fetch from "node-fetch"; // To verify CAPTCHA response
import sanitize from "sanitize-html"; // For sanitizing the message content

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { name, email, subject, message, cc, bcc, recaptchaToken } =
      await req.json();

    if (!name || !email || !subject || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({ error: "All fields are required, including CAPTCHA" }),
        { status: 400 }
      );
    }

    // Step 1: Verify CAPTCHA
    const captchaSecret = "6LdVWp4qAAAAABSGVBIe6KHjET8T5zrdahBCMxnt"; // Replace with your Google reCAPTCHA secret key
    const captchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${recaptchaToken}`;

    // Verify CAPTCHA token with Google reCAPTCHA API
    const captchaResponse = await fetch(captchaVerificationUrl, {
      method: "POST",
    });

    // Check if CAPTCHA response is OK
    if (!captchaResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to verify CAPTCHA" }),
        { status: 400 }
      );
    }

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA validation failed" }),
        { status: 400 }
      );
    }

    // Debugging: Log the parsed data
    console.log("Parsed data:", { name, email, subject, message, cc, bcc });

    // Sanitize the message content
    const sanitizedMessage = sanitize(message);

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Use environment variables for sensitive data
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Use environment variables for sensitive data
        pass: process.env.SMTP_PASS, // Use environment variables for sensitive data
      },
    });

    // HTML email template for the sender
    const htmlTemplate = `
    <div
      style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;"
    >
      <div style="background-color: #f04d58; padding: 20px; text-align: center">
        <img
          src="https://zeplinix.co.in/zeplinix-images/second/z-logo.png"
          alt="Zeplinix Logo"
          style="width: 150px; margin: 0 auto"
        />
      </div>

      <div style="padding: 20px; color: #333">
        <h1 style="font-size: 24px; margin-top: 0">
          Thank You for Your Inquiry – We’re Here to Assist
        </h1>
        <p>Hi <strong>${name}</strong>,</p>
        
        <p>${sanitizedMessage}</p>

        <div
          style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;"
        >
          <h3 style="margin: 0 0 10px">Here’s what you can expect from us:</h3>
          <ul style="list-style-type: none; padding-left: 0; color: #555">
            <li>• Prompt Response: Our team is reviewing your inquiry and will get back to you shortly.</li>
            <li>• Tailored Solutions: We ensure our offerings align with your specific requirements.</li>
            <li>• Commitment to Quality: Delivering excellence is at the heart of everything we do.</li>
            <li>• Transparent Communication: We keep you informed every step of the way.</li>
          </ul>
          <img
            src="https://zeplinix.co.in/zeplinix-images/second/desk.png"
            alt="Illustration"
            style="width: 100%; margin-top: 15px; border-radius: 8px"
          />
        </div>

        <div style="text-align: center; margin: 20px 0">
          <a
            href="https://www.zeplinix.com/contact"
            style="display: inline-block; padding: 12px 25px; background-color: #f04d58; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold;"
            >Start now</a
          >
        </div>

        <p>
          If you have any additional details or questions you’d like to share, feel free to reply to this email or contact us directly at
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

    const adminEmailTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #f04d58; padding: 20px; text-align: center; color: #fff;">
        <h1>New Inquiry Received</h1>
      </div>
      <div style="padding: 20px; color: #333">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      </div>
    </div>
    `;

    // Email options for the sender
    const senderMailOptions = {
      from: '"Zeplinix Support" <info@zeplinix.com>',
      to: email,
      subject: subject,
      html: htmlTemplate,
      cc: cc || "vidhan@zeplinix.com, manasi@zeplinix.com",
      bcc:
        bcc ||
        "abhijitp@301io.com,atmaramd@301io.com,sagar@zeplinix.com,abhishek.deshmukh@zeplinix.com",
    };

    // Email options for the admin
    const adminMailOptions = {
      from: '"Zeplinix Support" <info@zeplinix.com>',
      to: "admin@zeplinix.com",
      subject: "New Message from Zeplinix Contact Us",
      html: adminEmailTemplate,
    };

    // Send email to the sender
    try {
      const senderInfo = await transporter.sendMail(senderMailOptions);
      console.log("Email sent to sender:", senderInfo);
    } catch (error) {
      console.error("Error sending email to sender:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email to sender" }),
        { status: 500 }
      );
    }

    // Send email to admin
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log("Notification email sent to admin:", adminInfo);
    } catch (error) {
      console.error("Error sending email to admin:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email to admin" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: "Thank you for contacting us!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
