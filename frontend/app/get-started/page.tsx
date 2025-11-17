"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import MainLogo from "./../../assets/images/logo/logo.svg";

// --- Optional: samakan TOOLS dengan page lain untuk menu "Tools" ---
interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  isPremium?: boolean;
  isComingSoon?: boolean;
  category: string;
}

const TOOLS: Tool[] = [
  {
    id: "bmc-builder",
    name: "BMC Builder",
    description: "Generate dan edit Business Model Canvas dengan AI",
    icon: "📊",
    href: "/bmc-builder",
    category: "Planning",
    isPremium: false,
  },
  {
    id: "swot-analysis",
    name: "SWOT Analysis",
    description: "Analisis kekuatan, kelemahan, peluang, dan ancaman bisnis",
    icon: "🎯",
    href: "/swot-analysis",
    category: "Analysis",
    isComingSoon: true,
  },
  {
    id: "pitch-deck",
    name: "Pitch Deck Generator",
    description: "Buat pitch deck profesional dalam hitungan menit",
    icon: "🎤",
    href: "/pitch-deck",
    category: "Presentation",
    isPremium: true,
    isComingSoon: true,
  },
  {
    id: "market-research",
    name: "Market Research Tool",
    description: "Riset pasar dan analisis kompetitor otomatis",
    icon: "🔍",
    href: "/market-research",
    category: "Research",
    isPremium: true,
    isComingSoon: true,
  },
  {
    id: "financial-projection",
    name: "Financial Projection",
    description: "Proyeksi keuangan dan cash flow untuk bisnis",
    icon: "💰",
    href: "/financial",
    category: "Finance",
    isComingSoon: true,
  },
  {
    id: "lean-canvas",
    name: "Lean Canvas",
    description: "Template Lean Canvas untuk startup dan bisnis baru",
    icon: "🚀",
    href: "/lean-canvas",
    category: "Planning",
    isComingSoon: true,
  },
];

type Mode = "register" | "login";

export default function GetStartedPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("register");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrasikan dengan backend auth / Next-Auth dsb.
    alert(`${mode === "register" ? "Register" : "Login"} clicked (dummy handler)`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src={MainLogo}
                alt="Biz-Go Logo"
                height={28}
                className="object-contain"
                priority
              />

            </div>

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
                        tool.isComingSoon ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      onClick={e => tool.isComingSoon && e.preventDefault()}
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
             
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <span className="text-2xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              <Link href="/" className="block py-2 text-gray-600">
                Home
              </Link>
              <Link href="/pricing" className="block py-2 text-gray-600">
                Pricing
              </Link>
              <Link href="/about" className="block py-2 text-gray-600">
                About
              </Link>
              <div className="pt-2 border-t">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                  Tools
                </p>
                {TOOLS.map(tool => (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    className={`block py-2 text-gray-600 ${
                      tool.isComingSoon ? "opacity-50" : ""
                    }`}
                    onClick={e => tool.isComingSoon && e.preventDefault()}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    {tool.name}
                    {tool.isPremium && <span className="ml-2 text-xs">PRO</span>}
                    {tool.isComingSoon && <span className="ml-2 text-xs">Soon</span>}
                  </Link>
                ))}
              </div>
              <div className="pt-3 border-t space-y-2">
                <Link
                  href="/get-started"
                  className="w-full inline-flex justify-center py-2 bg-blue-600 text-white rounded-lg"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Auth Panel */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                {mode === "register" ? "Create your account" : "Welcome back"}
              </h1>
              <p className="text-sm text-gray-500">
                {mode === "register"
                  ? "Daftar untuk mulai menggunakan Biz-Go tools."
                  : "Login untuk melanjutkan penggunaan Biz-Go."}
              </p>
            </div>

            {/* Switcher */}
            <div className="mb-8">
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                    mode === "register"
                      ? "bg-white shadow text-blue-600"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`flex-1 py-2 text-sm font-medium rounded-full transition ${
                    mode === "login"
                      ? "bg-white shadow text-blue-600"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  Login
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              {mode === "register" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Misal: Budi Santoso"
                      required
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {mode === "register" && (
                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    Saya setuju dengan{" "}
                    <Link href="/terms" className="text-blue-600 underline">
                      Syarat & Ketentuan
                    </Link>{" "}
                    serta{" "}
                    <Link href="/privacy" className="text-blue-600 underline">
                      Kebijakan Privasi
                    </Link>
                    .
                  </label>
                </div>
              )}

              {mode === "login" && (
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div />
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                  >
                    Lupa password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                {mode === "register" ? "Register" : "Login"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 uppercase tracking-wide">
                atau
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm hover:bg-gray-50 transition"
                onClick={() => alert("Google login (dummy)")}
              >
                <span className="text-lg">G</span>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm hover:bg-gray-50 transition"
                onClick={() => alert("Apple login (dummy)")}
              >
                <span className="text-xl"></span>
                <span>Continue with Apple</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm hover:bg-gray-50 transition"
                onClick={() => alert("LinkedIn login (dummy)")}
              >
                <span className="text-lg font-bold text-blue-700">in</span>
                <span>Continue with LinkedIn</span>
              </button>
            </div>

            {/* Switch hint */}
            <p className="mt-6 text-xs text-center text-gray-500">
              {mode === "register" ? (
                <>
                  Sudah punya akun?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline font-medium"
                    onClick={() => setMode("login")}
                  >
                    Login di sini
                  </button>
                </>
              ) : (
                <>
                  Belum punya akun?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline font-medium"
                    onClick={() => setMode("register")}
                  >
                    Register sekarang
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </main>

      {/* Footer (simple) */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>©2025 Biz-Go. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}