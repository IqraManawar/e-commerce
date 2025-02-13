"use client";

import { useRouter } from "next/navigation";

export default function OrderConfirmation() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
   

      {/* Confirmation Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
          <h2 className="text-3xl font-bold text-green-600">🎉 Order Confirmed!</h2>
          <p className="text-lg text-gray-700 mt-2">Thank you for shopping with LuxeLoft!</p>
          
          {/* Order Details */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-600">Order Number:</p>
            <p className="text-lg font-bold">#LX-{Math.floor(Math.random() * 100000)}</p>
            <p className="text-gray-600 mt-2">Estimated Delivery:</p>
            <p className="text-lg font-bold">3-5 Business Days</p>
          </div>

          {/* Continue Shopping Button */}
          <button
            className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            onClick={() => router.push("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      </main>

    
    </div>
  );
}
