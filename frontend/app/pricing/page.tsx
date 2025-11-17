
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainLogo from './../../assets/images/logo/logo.svg';
import PortfolioFooter from "@/components/PortfolioFooter";
import Header from "@/components/Header";

// --- Type Definitions ---
interface FAQ {
  question: string;
  answer: string;
}

interface DonationPlatform {
  name: string;
  icon: string;
  url: string;
  color: string;
  description: string;
}

// --- Data ---
const DONATION_PLATFORMS: DonationPlatform[] = [
  {
    name: 'Buy Me a Coffee',
    icon: '☕',
    url: 'https://buymeacoffee.com/yourusername', // Ganti dengan link Anda
    color: 'from-yellow-400 to-yellow-600',
    description: 'Support dengan secangkir kopi'
  },
  {
    name: 'Trakteer',
    icon: '🍕',
    url: 'https://trakteer.id/yourusername', // Ganti dengan link Anda
    color: 'from-red-400 to-red-600',
    description: 'Traktir developer dari Indonesia'
  },
  {
    name: 'Saweria',
    icon: '💝',
    url: 'https://saweria.co/yourusername', // Ganti dengan link Anda
    color: 'from-orange-400 to-orange-600',
    description: 'Dukungan untuk kreator lokal'
  },
  {
    name: 'Payoneer',
    icon: '💳',
    url: 'https://payoneer.com/yourusername', // Ganti dengan link Anda
    color: 'from-green-400 to-green-600',
    description: 'Support internasional'
  }
];

const FAQS: FAQ[] = [
  {
    question: "Apakah Biz-Go benar-benar gratis?",
    answer: "Ya, 100% gratis! Semua tools dasar dapat digunakan tanpa biaya. Kami percaya bahwa setiap entrepreneur berhak mendapatkan akses ke tools berkualitas untuk membangun bisnis mereka."
  },
  {
    question: "Mengapa gratis? Apa ada biaya tersembunyi?",
    answer: "Tidak ada biaya tersembunyi sama sekali. Project ini dibuat dengan passion untuk membantu komunitas entrepreneur. Kami mengandalkan dukungan sukarela dari pengguna yang puas dengan layanan kami."
  },
  {
    question: "Bagaimana cara mendukung developer?",
    answer: "Anda bisa mendukung kami melalui platform donasi seperti Buy Me a Coffee, Trakteer, Saweria, atau Payoneer. Dukungan Anda membantu kami maintain server, develop fitur baru, dan keep the tools free untuk semua."
  },
  {
    question: "Apakah saya harus donasi untuk menggunakan tools?",
    answer: "Tidak sama sekali! Donasi bersifat 100% opsional. Tools akan tetap gratis dan fully functional tanpa donasi. Namun, jika tools kami membantu bisnis Anda, kami sangat appreciate dukungan Anda."
  },
  {
    question: "Apa yang saya dapatkan jika donasi?",
    answer: "Kepuasan membantu project open-source tetap hidup! Plus, karma baik dan terima kasih tulus dari developer. Ke depannya, kami berencana memberikan badge supporter dan early access ke fitur beta."
  },
  {
    question: "Bagaimana dengan data privacy?",
    answer: "Data Anda aman! Semua data disimpan secara lokal di browser Anda (localStorage). Kami tidak collect, store, atau sell data Anda. Privacy adalah prioritas kami."
  }
];

const FEATURES_COMPARISON = [
  { feature: 'BMC Builder', free: true, future: 'Enhanced AI' },
  { feature: 'SWOT Analysis', free: true, future: 'Templates Library' },
  { feature: 'Lean Canvas', free: true, future: 'Collaboration' },
  { feature: 'Export to JSON/PDF', free: true, future: 'Cloud Sync' },
  { feature: 'Local Storage', free: true, future: 'Cloud Backup' },
  { feature: 'AI Generation', free: true, future: 'Advanced AI Models' },
  { feature: 'Unlimited Projects', free: true, future: 'Team Workspace' },
  { feature: 'Customer Support', free: 'Community', future: 'Priority Support' },
];

// --- Components ---
export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number>(5);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            <span>✨</span>
            <span>Forever Free - No Hidden Costs</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Completely Free,
            <span className="block text-blue-600 mt-2">Forever.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Biz-Go dibuat dengan ❤️ untuk komunitas entrepreneur. 
            Tidak ada biaya, tidak ada trial, tidak ada limit. Just pure value.
          </p>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Free Forever Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Free Forever Plan</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-xl">/month</span>
              </div>
              <p className="text-blue-100">No credit card required. Ever.</p>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Everything You Need to Build Your Business
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {FEATURES_COMPARISON.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div className="flex-1">
                      <span className="text-gray-800 font-medium">{item.feature}</span>
                      {item.future && (
                        <span className="ml-2 text-xs text-gray-500">
                          (🚀 {item.future} coming)
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  href="/bmc-builder"
                  className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Start Using Tools Now →
                </Link>
                <p className="mt-3 text-sm text-gray-500">
                  Instant access, no signup required
                </p>
              </div>
            </div>
          </div>

          {/* Support Developer Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Love Our Tools? Support the Developer! 
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Biz-Go akan selalu gratis, tapi server dan development butuh resources. 
                Dukungan Anda membantu kami terus berinovasi dan menjaga tools tetap free untuk semua.
              </p>
            </div>

            {/* Donation Amount Selector */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <p className="text-center mb-4 font-medium">
                ☕ Traktir developer dengan:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[5, 10, 20, 50, 100].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`px-6 py-3 rounded-lg font-medium transition ${
                      selectedAmount === amount
                        ? 'bg-white text-purple-600'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <p className="text-center text-sm opacity-75">
                Equivalent to {selectedAmount === 5 ? '1 cup of coffee' :
                            selectedAmount === 10 ? '2 cups of coffee' :
                            selectedAmount === 20 ? 'a nice lunch' :
                            selectedAmount === 50 ? 'a week of server costs' :
                            'a month of development tools'}
              </p>
            </div>

            {/* Donation Platforms */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DONATION_PLATFORMS.map(platform => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-4 hover:transform hover:scale-105 transition group"
                >
                  <div className={`bg-gradient-to-r ${platform.color} rounded-lg p-3 text-white text-center mb-3`}>
                    <span className="text-3xl">{platform.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {platform.name}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {platform.description}
                  </p>
                  <span className="text-xs text-blue-600 group-hover:underline mt-2 inline-block">
                    Support now →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-75">
                💝 Setiap dukungan, sekecil apapun, sangat berarti bagi kami.
              </p>
              <p className="text-xs mt-2 opacity-60">
                100% donasi digunakan untuk server, tools, dan development.
              </p>
            </div>
          </div>

          {/* Benefits of Supporting */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8">
              Why Support Biz-Go? 🤝
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold mb-2">Keep It Free</h4>
                <p className="text-sm text-gray-600">
                  Help us maintain free access untuk semua entrepreneur di seluruh dunia
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold mb-2">New Features</h4>
                <p className="text-sm text-gray-600">
                  Fund development untuk AI yang lebih canggih dan tools baru
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌏</div>
                <h4 className="font-semibold mb-2">Community Impact</h4>
                <p className="text-sm text-gray-600">
                  Support ecosystem startup dan UMKM Indonesia & global
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-center text-sm text-blue-800">
                <span className="font-semibold">Fun Fact:</span> Dengan $5, Anda sudah cover 
                server cost untuk 100+ entrepreneurs menggunakan tools kami selama sebulan! 
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                  >
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <span className={`transform transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}>
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

          {/* Testimonial/Thank You Section */}
          <div className="mt-16 text-center">
            <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                From Developer with ❤️
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                Saya membuat Biz-Go karena percaya setiap orang dengan ide bisnis 
                deserve kesempatan untuk succeed. Tools tidak seharusnya jadi barrier. 
                Terima kasih telah menggunakan Biz-Go, dan terima kasih lebih bagi 
                yang telah support development kami. You guys are awesome!
              </p>
              <p className="text-sm text-gray-500">
                - SN, Developer -
              </p>
              
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  <span>⭐</span>
                  Star on GitHub
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <span>🐦</span>
                  Follow on Twitter
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            No sign up. No credit card. Just start building.
          </p>
          <Link
            href="/bmc-builder"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 text-lg"
          >
            Launch BMC Builder Now - It is Free! 🚀
          </Link>
        </div>
      </section>

      {/* Footer */}
      <PortfolioFooter/>
    </div>
  );
}