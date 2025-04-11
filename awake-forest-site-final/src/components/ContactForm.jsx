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
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setStatus("Sent successfully!");
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        className="w-full p-2 border rounded"
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        name="message"
        rows="5"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Send
      </button>
      <p>{status}</p>
    </form>
  );
}
