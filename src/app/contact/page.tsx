"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LuxeLoft</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/shop" className="hover:underline">Shop</a></li>
              <li><a href="/categories" className="hover:underline">Categories</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact LuxeLoft</h1>
          <p className="text-lg sm:text-xl mt-4">
            Have questions? We love to hear from you. Reach out and we will get back as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              ></textarea>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700"><strong>Email:</strong> support@luxeloft.com</p>
            <p className="text-gray-700 mt-2"><strong>Phone:</strong> +92 300 1234567</p>
            <p className="text-gray-700 mt-2"><strong>Address:</strong> 123 Fashion Street, Lahore, Pakistan</p>

            {/* Social Media */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.instagram.com/luxeloft" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">Instagram</a>
                <a href="https://www.facebook.com/luxeloft" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">Facebook</a>
                <a href="https://www.twitter.com/luxeloft" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4 mt-6">
        <p>&copy; 2025 LuxeLoft. All rights reserved.</p>
      </footer>
    </div>
  );
}