import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <div className="text-xl font-bold">My Website</div>
        <div>
          <Link href="/" className="mr-4 hover:underline">Home</Link>
          <Link href="/about" className="mr-4 hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar