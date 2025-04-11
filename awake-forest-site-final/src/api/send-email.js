import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

	const { name, email, message } = req.body;

	if (!name || !email || !message) {
		return res.status(400).json({ error: "Missing fields" });
	}

	try {
		const transporter = nodemailer.createTransport({
			service: "Gmail", // or your provider
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		await transporter.sendMail({
			from: email,
			to: process.env.RECEIVER_EMAIL,
			subject: `Contact from ${name}`,
			text: message,
			html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
		});

		return res.status(200).json({ success: true });
	} catch (error) {
		console.error("Email error:", error);
		return res.status(500).json({ error: "Failed to send email" });
	}
}
