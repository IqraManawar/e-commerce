"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutPage() {
  const router = useRouter();

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
              <li><a href="/cart" className="hover:underline">Cart</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold">About LuxeLoft</h1>
          <p className="text-lg sm:text-xl mt-4">
            Where elegance meets tradition. LuxeLoft brings you the finest Pakistani fashion with a modern touch.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Image src="/pic.jpg" alt="Our Story" width={500} height={400} className="rounded-lg shadow-md" />
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-700 mt-4">
              LuxeLoft was founded with a vision to celebrate the rich heritage of Pakistani fashion. 
              From intricate embroidery to luxurious fabrics, we curate collections that redefine elegance.
              Our designs blend tradition with contemporary style, making them perfect for modern women who appreciate quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg mt-4">
            LuxeLoft is committed to bringing **premium Pakistani fashion** to the world. We believe in **quality, elegance, and authenticity**.
            Every piece is designed with love and crafted to perfection, ensuring you feel confident and stylish.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Experience the LuxeLoft Elegance</h2>
        <p className="text-lg mt-2">Explore our collection and discover timeless Pakistani fashion.</p>
        <button
          className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          onClick={() => router.push('/shop')}
        >
          Shop Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4 mt-6">
        <p>&copy; 2025 LuxeLoft. All rights reserved.</p>
      </footer>
    </div>
  );
}
