"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainLogo, WhiteLogo } from "@/assets/images/images";

// --- Type Definitions ---
interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Data ---
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Septian Nuriyanto",
    role: "Founder & Lead Developer",
    avatar: "👨‍💻",
    bio: "Programmer yang sedang mencari jati diri di tengah-tengah lautan tech stack",
    social: {
      linkedin: "https://linkedin.com/in/seotian-n",
      github: "https://github.com/septiannuriyanto",
      twitter: "https://twitter.com/septiannuriyanto"
    }
  },
  
];

const MILESTONES: Milestone[] = [
  {
    date: "Februari 2025",
    title: "Discovery Phase",
    description: "Mendapat materi tentang enterpreneurship di kuliah S1",
    icon: "📚"
  },
  {
    date: "Maret 2025",
    title: "Assignment",
    description: "Membuat Business Model Canvas untuk tugas kuliah. Terkendala minimnya template yang tersedia, ada pun harganya sangat mahal",
    icon: "📝"
  },
  {
    date: "Jun 2025",
    title: "First User - Friend",
    description: "Teman sedang memulai bisnis cafe, namun terkendala tidak adanya akses ke Proper Business Planning",
    icon: "☕"
  },
  {
    date: "Sep 2025",
    title: "Brainstorming",
    description: "Muncul ide untuk membuat simple BMC tool yang free dan easy to use dan menggunakan integrasi AI",
    icon: "💡"
  },
  {
    date: "November 2025",
    title: "First launch",
    description: "MVP BMC Builder diluncurkan secara gratis,",
    icon: "🎊"
  },
];

const VALUES: Value[] = [
  {
    icon: "🎯",
    title: "Accessibility First",
    description: "Business tools seharusnya accessible untuk semua, regardless of budget",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: "🚀",
    title: "Simplicity Matters",
    description: "Kompleksitas adalah musuh action. We keep things simple and actionable",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: "🤝",
    title: "Community Driven",
    description: "Built by entrepreneurs, for entrepreneurs. Your feedback shapes our product",
    color: "from-green-400 to-green-600"
  },
  {
    icon: "🔒",
    title: "Privacy Respected",
    description: "Your business data adalah milik Anda. We don't collect or sell your information",
    color: "from-orange-400 to-orange-600"
  }
];

const FAQS: FAQ[] = [
  {
    question: "Kenapa Biz-Go gratis?",
    answer: "Kami percaya setiap entrepreneur deserve akses ke quality business tools. Supported by voluntary donations dari users yang puas dengan service kami."
  },
  {
    question: "Siapa di balik Biz-Go?",
    answer: "Seorang Developer yang pernah merasakan susahnya membangun bisnis karena minimnya akses ke ilmu enterpreneur, dan para dermawan di bidang software development yang rela berkontribusi demi terciptanya demokratisasi business tool ini."
  },
  {
    question: "Bagaimana cara contribute?",
    answer: "Banyak cara! Gunakan tools kami, berikan feedback, share ke teman, atau support lewat donasi. Setiap kontribusi sangat berarti."
  },
  {
    question: "Apa future plans untuk Biz-Go?",
    answer: "More tools, better AI, collaboration features, dan mobile apps. Tapi tetap dengan prinsip: FREE untuk basic features!"
  }
];

const TECH_STACK = [
  { name: "Next.js", icon: "⚡", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "OpenAI API", icon: "🤖", category: "AI" },
  { name: "Vercel", icon: "▲", category: "Hosting" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" }
];

// --- Component ---
export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br  from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src={MainLogo}
                alt="Biz-Go Logo" 
                height={28}
                className="object-contain"
                priority  
              />
            </Link>
            
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                Home
              </Link>
              <Link href="/bmc-builder" className="text-gray-600 hover:text-gray-900 transition">
                Tools
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
              <Link href="/get-started" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span>🌟</span>
            <span>Our Story</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Making Business Tools
            <span className="block text-blue-600 mt-2">Accessible for Everyone</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dimulai dari frustasi personal, kini menjadi mission untuk democratize 
            business planning tools untuk semua entrepreneur di dunia.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Origin Story 📖
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Tahun 2025, saya (Septian) sedang membantu teman launch startup-nya. 
                    Dia butuh buat Business Model Canvas, tapi tools yang ada either 
                    terlalu mahal ($50+/month) atau terlalu complicated.
                  </p>
                  <p>
                    &quot;Why not build something simple and free?&quot; pikir saya. 
                    What started sebagai weekend project untuk satu teman, 
                    ternyata dibutuhkan oleh ribuan entrepreneurs lain.
                  </p>
                  <p>
                    Sekarang, Biz-Go adalah full-fledged platform dengan mission yang clear :  
                    <span className="font-semibold text-gray-900">
                      {" "}No entrepreneur should be held back by expensive tools.
                    </span>
                  </p>
                  <p>
                    Kami funded purely by voluntary donations. No VC, no pressure untuk 
                    monetize aggressively. Just pure focus on helping entrepreneurs succeed.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-linear-to-br  from-blue-500 to-purple-600 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold mb-1">Democratize Business Tools</h4>
                      <p className="text-blue-100 text-sm">
                        Make professional business planning accessible to everyone
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-semibold mb-1">Simplify Complexity</h4>
                      <p className="text-blue-100 text-sm">
                        Turn complex business frameworks into simple, actionable tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <h4 className="font-semibold mb-1">Build Community</h4>
                      <p className="text-blue-100 text-sm">
                        Create supportive ecosystem for entrepreneurs worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey 🚀
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {MILESTONES.map((milestone, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2"></div>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                  <div className={`w-1/2 px-8 ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition">
                      <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? "justify-end" : ""}`}>
                        <span className="text-2xl">{milestone.icon}</span>
                        <span className="text-sm font-semibold text-blue-600">
                          {milestone.date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nilai-nilai yang guide setiap decision kami dalam building Biz-Go
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 hover:transform hover:scale-105 transition"
              >
                <div className={`w-12 h-12 rounded-lg bg-linear-to-r ${value.color} flex items-center justify-center text-white text-2xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section (dengan panel join developer) */}
      {/* Team Section */}
<section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
      Meet the Team
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Passionate individuals working together untuk make entrepreneurship easier
    </p>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Team Member Cards */}
      {TEAM_MEMBERS.map((member, idx) => (
        <div 
          key={idx}
          className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition"
        >
          <div className="text-6xl mb-4">{member.avatar}</div>
          <h3 className="font-semibold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-blue-600 mb-3">
            {member.role}
          </p>
          <p className="text-xs text-gray-600 mb-4">
            {member.bio}
          </p>
          
          {member.social && (
            <div className="flex justify-center gap-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  in
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition"
                >
                  gh
                </a>
              )}
              {member.social.twitter && (
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  tw
                </a>
              )}
            </div>
          )}
        </div>
      ))}
      
      {/* Join Team Card - Ditempatkan setelah Septian (index 0) */}
      {/* Pindahkan ke posisi kedua dalam grid */}
      <div 
        className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center 
                   bg-linear-to-br from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 
                   transition-all duration-300 group order-2 lg:order-0"
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Icon Container */}
          <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-500 to-purple-600 
                          flex items-center justify-center text-white text-4xl mb-4
                          group-hover:scale-110 transition-transform duration-300">
            <span>+</span>
          </div>
          
          {/* Main Text */}
          <h3 className="font-semibold text-gray-900 mb-2">
            You Could Be Here!
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-6 max-w-xs">
            Tertarik berkontribusi di project ini?
          </p>
          
          {/* Benefits List */}
          <div className="space-y-2 mb-6 text-left">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Remote work friendly</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Open source contribution</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Impact thousands of users</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-3 w-full">
            <a
              href="https://github.com/septiannuriyanto/biz-go/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 
                       text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 
                       transition-all duration-300 transform hover:scale-105"
            >
              Join as Developer
            </a>
            
          </div>
          
          {/* Bottom Text */}
          <p className="text-xs text-gray-500 mt-4">
            We ❤️ passionate developers
          </p>
        </div>
      </div>
    </div>
    
    {/* Additional CTA Below Team Grid */}
    
  </div>
</section>

      {/* Tech Stack Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Built With Modern Tech
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Stack yang power Biz-Go&#39;s performance dan reliability
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-linear-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Love What We&#39;re Building? 💜
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Support our mission to keep business tools free for everyone
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/pricing"
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition transform hover:scale-105"
            >
              Support Us ☕
            </Link>
            <Link
              href="/bmc-builder"
              className="px-8 py-3 border border-white rounded-lg font-medium hover:bg-white/10 transition"
            >
              Try Our Tools
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-purple-100">
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>100% Optional</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Tools stay free</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✓</span>
              <span>Support development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Ada pertanyaan, feedback, atau just want to say hi?
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:hello@biz-go.com"
              className="bg-white rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-sm text-gray-600">hello@biz-go.com</p>
            </a>
            
            <a
              href="https://twitter.com/bizgo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">🐦</div>
              <h3 className="font-semibold text-gray-900 mb-1">Twitter</h3>
              <p className="text-sm text-gray-600">@bizgo</p>
            </a>
            
            <a
              href="https://github.com/bizgo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">🐙</div>
              <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
              <p className="text-sm text-gray-600">github.com/bizgo</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src={WhiteLogo}
              alt="Biz-Go Logo" 
              height={24}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Made with ❤️ in Indonesia for entrepreneurs worldwide
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}