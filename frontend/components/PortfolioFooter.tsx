import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WhiteLogo from '../assets/images/logo/logo-white.svg'

const PortfolioFooter = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Logo & Description */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={WhiteLogo}
                  alt="Biz-Go Logo"
                  height={24}
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-gray-400 mb-3">
                Business tools suite untuk entrepreneur modern.
              </p>

              {/* Portfolio Badge */}
              <p className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 border border-gray-700 rounded-lg text-gray-300">
                🚀 This is a Portfolio Project
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/bmc-builder" className="hover:text-white transition">
                    BMC Builder
                  </Link>
                </li>
                <li className="opacity-50">SWOT Analysis</li>
                <li className="opacity-50">Lean Canvas</li>
                <li className="opacity-50">Financial Tools</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support Me</h4>
              <ul className="space-y-2 text-sm text-gray-400">

                <li>
                  <a 
                    href="https://buymeacoffee.com/YOUR_USERNAME" 
                    target="_blank" 
                    className="hover:text-white transition"
                  >
                    ☕ Buy Me a Coffee
                  </a>
                </li>

                <li>
                  <a 
                    href="https://saweria.co/YOUR_USERNAME"
                    target="_blank" 
                    className="hover:text-white transition"
                  >
                    💛 Saweria
                  </a>
                </li>

                <li>
                  <a 
                    href="https://ko-fi.com/YOUR_USERNAME"
                    target="_blank" 
                    className="hover:text-white transition"
                  >
                    🔗 Ko-fi
                  </a>
                </li>

              </ul>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2025 Biz-Go. All rights reserved by SN Codes Made with ❤️ for entrepreneurs worldwide</p>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default PortfolioFooter
