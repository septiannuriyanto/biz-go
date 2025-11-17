import React, { useState } from 'react'
import HomeLink from './HomeLink'
import Link from 'next/link'
import { TOOLS } from '@/data/constants'
import { useRouter } from 'next/navigation'

const Header = () => {

    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <HomeLink/>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900 transition flex items-center gap-1">
                  Tools
                  <span className="text-xs">▼</span>
                </button>
                <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {TOOLS.map(tool => (
                    <Link
                      key={tool.id}
                      href={tool.href}
                      className={`block px-4 py-3 hover:bg-gray-50 transition ${
                        tool.isComingSoon ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      onClick={(e) => tool.isComingSoon && e.preventDefault()}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tool.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{tool.name}</span>
                            {tool.isPremium && (
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                PRO
                              </span>
                            )}
                            {tool.isComingSoon && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer" onClick={()=>{router.push('/get-started')}}>
                  Get Started Free
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              <Link href="/" className="block py-2 text-gray-600">Home</Link>
              <Link href="/pricing" className="block py-2 text-gray-600">Pricing</Link>
              <Link href="/about" className="block py-2 text-gray-600">About</Link>
              <div className="pt-2 border-t">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Tools</p>
                {TOOLS.map(tool => (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className={`block py-2 text-gray-600 ${
                      tool.isComingSoon ? 'opacity-50' : ''
                    }`}
                    onClick={(e) => tool.isComingSoon && e.preventDefault()}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    {tool.name}
                    {tool.isPremium && <span className="ml-2 text-xs">PRO</span>}
                    {tool.isComingSoon && <span className="ml-2 text-xs">Soon</span>}
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t space-y-2">
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg cursor-pointer" onClick={()=>{router.push('/get-started')}}>
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
