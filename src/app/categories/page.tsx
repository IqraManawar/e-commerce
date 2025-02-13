"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const categories = [
  { id: 1, name: "Lawn Suits", image: "/lawnsuit.jpg", link: "/shop?category=lawn" },
  { id: 2, name: "Chiffon Dresses", image: "/chiffon.jpg", link: "/shop?category=chiffon" },
  { id: 3, name: "Silk Wear", image: "/silk.jpg", link: "/shop?category=silk" },
  { id: 4, name: "Cotton Attire", image: "/suit.jpg", link: "/shop?category=cotton" },
];

export default function CategoriesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     <Header/>

      {/* Categories Section */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Shop by Category</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
                onClick={() => router.push(category.link)}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  className="rounded-md"
                />
                <h2 className="mt-2 text-lg font-semibold text-center">{category.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
       <Footer/>
     
    </div>
  );
}
