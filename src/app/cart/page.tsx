"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Sample cart data (replace with real data from a state management system)
const initialCart = [
  { id: 1, name: "Embroidered Lawn Suit", price: 80, image: "/lawnsuit.jpg", quantity: 1 },
  { id: 2, name: "Chiffon Anarkali", price: 95, image: "/anarkali.jpg", quantity: 1 },
];

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState(initialCart);

  // Update quantity
  const updateQuantity = (id: number, amount: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      

      {/* Cart Section */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h1>

          {cart.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Cart Items */}
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center space-x-4">
                    <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">${item.price} each</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              {/* Total Price */}
              <div className="flex justify-between items-center mt-6">
                <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
                <button
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  onClick={() => router.push("/checkout")}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
          )}
        </div>
      </main>

      
    </div>
  );
}
