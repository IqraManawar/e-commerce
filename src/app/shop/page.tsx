"use client"

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const products = [
  { id: 1, name: "Embroidered Lawn Suit", price: "$80", image: "/lawnsuit.jpg" },
  { id: 2, name: "Chiffon Anarkali", price: "$95", image: "/chiffon.jpg" },
  { id: 3, name: "Silk Shalwar Kameez", price: "$110", image: "/silk.jpg" },
  { id: 4, name: "Printed Cotton Suit", price: "$70", image: "/suit2.jpg" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Header/>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Shop Traditional Pakistani Suits</h1>
        
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for suits..."
            className="p-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No suits found.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
