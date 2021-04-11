import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SEND_GRID_API);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, message } = JSON.parse(req.body);

    const toMe = {
      from: {
        email: process.env.EMAIL,
      },
      to: process.env.EMAIL,
      subject: `Someone said hi. ${email}`,
      html: `<h3>${message}</h3>`,
    };

    const toSender = {
      from: {
        email: process.env.EMAIL,
      },
      to: email,
      subject: "Thanks for letting me know.",
      html: `
        <h3>Hi nice to meet you. 👋</h3>
          <br />
          <br />
          <br />
          <br />
          <p>— Joimee</p>
      `.trim(),
    };

    try {
      await sgMail.send(toMe);
      await sgMail.send(toSender);
    } catch (error) {
      console.log("ERROR", error.response.body);
    }

    res.send(true);
  } else {
    // Handle any other HTTP method
  }
}
