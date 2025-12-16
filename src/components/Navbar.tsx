import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white">
        <Link href="/" className="mr-4 hover:underline">Home</Link>
        <Link href="/about" className="mr-4 hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
    </div>
  )
}

export default Navbar