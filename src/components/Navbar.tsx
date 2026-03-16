import { useState } from 'react'
import logo from '../assets/logo white.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Ajoti" className="h-10 w-auto object-contain" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">About Us</a>
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Products</a>
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Login
          </a>
          <a href="https://user.ajoti.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-1"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-800" />
          <span className="block w-6 h-0.5 bg-gray-800" />
          <span className="block w-6 h-0.5 bg-gray-800" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 border-t border-gray-100 pt-4">
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">About Us</a>
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Products</a>
          <a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
              Login
            </a>
            <a href="#" className="text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md transition-colors">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
