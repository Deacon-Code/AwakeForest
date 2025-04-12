import { useState } from "react";
import "./ContactFormStyles.css";

export default function ContactForm() {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		try {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (res.ok) {
				setForm({ name: "", email: "", message: "" });
				setStatus(data.message || "Email sent successfully!");
			} else {
				setStatus(data.error || "Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error("Error:", error);
			setStatus("An error occurred. Please try again.");
		}
	};

	return (
		<div className="contact-form-container">
			<form onSubmit={handleSubmit} className="contact-form">
				<input
					className="contact-input"
					type="text"
					name="name"
					placeholder="Your Name"
					value={form.name}
					onChange={handleChange}
					required
				/>
				<input
					className="contact-input"
					type="email"
					name="email"
					placeholder="Your Email"
					value={form.email}
					onChange={handleChange}
					required
				/>
				<textarea
					className="contact-textarea"
					name="message"
					rows="5"
					placeholder="Your Message"
					value={form.message}
					onChange={handleChange}
					required
				/>
				<button className="contact-button" type="submit">
					Send
				</button>
				<p className="contact-status">{status}</p>
			</form>
		</div>
	);
}
