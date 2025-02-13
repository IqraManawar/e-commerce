// components/Header.js
import Link from 'next/link';

export default function Header  ()  {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-950 text-white">
      <div className="text-2xl">
        <Link href="">MyLogo</Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};