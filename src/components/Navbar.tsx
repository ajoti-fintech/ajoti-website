import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo white.png'

function AuthDropdown({
  label,
  buttonClass,
}: {
  label: string
  buttonClass: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={buttonClass}
      >
        {label}
        <svg className="w-3 h-3 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-lg shadow-lg z-50 overflow-hidden">
          <a
            href="https://user.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
          >
            User
          </a>
          <a
            href="https://admin.ajoti.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors border-t border-gray-100"
          >
            Admin
          </a>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/"><img src={logo} alt="Ajoti" className="h-10 w-auto object-contain" /></Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Home</Link>
          <Link to="/aboutus" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">About Us</Link>
          <Link to="/products" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Products</Link>
          <Link to="/faq" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">FAQ</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <AuthDropdown
            label="Login"
            buttonClass="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors flex items-center"
          />
          <AuthDropdown
            label="Get Started"
            buttonClass="text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md transition-colors flex items-center"
          />
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
          <Link to="/" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/aboutus" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/products" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/faq" className="text-sm text-gray-600 hover:text-teal-600 transition-colors" onClick={() => setMenuOpen(false)}>FAQ</Link>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Login as</p>
            <a href="https://user.ajoti.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">User</a>
            <a href="https://admin.ajoti.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Admin</a>
          </div>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Get Started as</p>
            <a href="https://user.ajoti.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md transition-colors text-center">User</a>
            <a href="https://admin.ajoti.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold border border-teal-700 text-teal-700 hover:bg-teal-50 px-5 py-2.5 rounded-md transition-colors text-center">Admin</a>
          </div>
        </div>
      )}
    </nav>
  )
}
