// 
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Sample cart data (replace with real cart state)
const cartItems = [
  { id: 1, name: "Embroidered Lawn Suit", price: 80, image: "/lawn_suit1.jpg", quantity: 1 },
  { id: 2, name: "Chiffon Anarkali", price: 95, image: "/anarkali1.jpg", quantity: 1 },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle checkout submission
  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/order-confirmation"); // Redirect to order confirmation page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Checkout Section */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <form onSubmit={handleCheckout} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Shipping Address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-4">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
