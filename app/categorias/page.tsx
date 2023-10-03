import Link from 'next/link';
import React from 'react';

export default function Categories() {
  return (
    <main className="grid max-w-[1400px] mx-auto grid-cols-12 gap-6 py-20 relative">
      <div className="flex flex-col">
        <h2 className="poppins text-gray-700">Categorias</h2>

        <div>
          <Link
            href="/categorias/bolos"
            className="bg-white mt-4 block hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Bolos
          </Link>
        </div>
      </div>
    </main>
  );
}
