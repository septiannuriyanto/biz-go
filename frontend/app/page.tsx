
"use client"
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, FEATURES, TOOLS } from "../data/constants";
import Header from "@/components/Header";
import PortfolioFooter from "@/components/PortfolioFooter";



// --- Components ---
export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const filteredTools = selectedCategory === 'All' 
    ? TOOLS
    : TOOLS.filter(tool => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      
      <Header/>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
           
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Build Your Business
            <span className="block text-blue-600 mt-2">Smarter & Faster</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Suite lengkap business tools berbasis AI untuk membantu Anda merencanakan, 
            menganalisis, dan mengembangkan bisnis dengan lebih efisien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bmc-builder"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
            >
              Try BMC Builder Free →
            </Link>
            <button className="px-8 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Biz-Go?
            </h2>
            <p className="text-lg text-gray-600">
              Platform all-in-one untuk kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Tools
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Pilih tools yang sesuai dengan kebutuhan bisnis Anda
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`block ${tool.isComingSoon ? 'cursor-not-allowed' : ''}`}
                onClick={(e) => tool.isComingSoon && e.preventDefault()}
              >
                <div className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition h-full border ${
                  tool.isComingSoon ? 'opacity-60' : 'border-gray-100 hover:border-blue-200'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{tool.icon}</span>
                    <div className="flex gap-2">
                      {tool.isPremium && (
                        <span className="text-xs bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-2 py-1 rounded-full font-medium">
                          PRO
                        </span>
                      )}
                      {tool.isComingSoon && (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full font-medium">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                      {tool.category}
                    </span>
                    {!tool.isComingSoon && (
                      <span className="text-blue-600 text-sm font-medium">
                        Try Now →
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mulai gratis sekarang, upgrade kapan saja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bmc-builder"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Start Free Trial
            </Link>
            <button className="px-8 py-3 border border-white/50 text-white rounded-lg font-medium hover:bg-white/10 transition">
              View Pricing
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PortfolioFooter/>
    </div>
  );
}