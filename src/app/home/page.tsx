"use client";

import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header/>
    

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">Elegance in Every Thread</h1>
          <p className="text-lg sm:text-xl mt-4">
            Discover timeless Pakistani fashion with LuxeLoft. Shop the latest designs in lawn, chiffon, and silk.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            onClick={() => router.push('/shop')}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
           
            <Image src="/suit.jpg" alt="suit" width={300} height={300} className="rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">Embroidered Lawn Suit</h3>
            <p className="text-gray-600">$80</p>
            <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
          {/* Product 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image src="/anarkali.jpg" alt="Anarkali Dress" width={300} height={300} className="rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">Chiffon Anarkali</h3>
            <p className="text-gray-600">$95</p>
            <button className="mt-2 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Shop the Latest Trends</h2>
        <p className="text-lg mt-2">Stay ahead in fashion with LuxeLoft’s exclusive collections.</p>
        <button
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          onClick={() => router.push('/shop')}
        >
          Explore Collection
        </button>
      </section>

     <Footer/>
    </div>
  );
}
