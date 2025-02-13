"use client";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 px-4 sm:px-6 lg:px-8">
     
      <h1 className="text-3xl sm:text-4xl font-bold text-black text-center">
        Welcome to LuxeLoft
      </h1>
      <p className="text-lg sm:text-xl text-white mt-4 text-center">
        Explore a curated collection of fashion for Pakistani women, blending style and tradition.
      </p>
      <button
        className="mt-6 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => router.push('./home')}
      >
        Start Shopping
      </button>
    </main>

  );
}
