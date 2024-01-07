import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="mt-5">
      <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/">Home</Link>
      <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/performance">Performance</Link>
      <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/reliability">Reliability</Link>
      <Link className="text-blue-200 hover:text-blue-500 mr-6 ml-6" href="/scale">Scale</Link>
    </div>
  )
}