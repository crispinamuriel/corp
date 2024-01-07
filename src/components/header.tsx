import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold  text-3xl text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/">Home</Link>
        <div className="space-x-4 text-xl">
          <Link className="text-blue-200 hover:text-blue-500 ml-6" href="/performance">Performance</Link>
          <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/reliability">Reliability</Link>
          <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  )
}