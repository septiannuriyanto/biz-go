
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainLogo } from "@/assets/images/images";

// --- Type Definitions ---
interface Section {
  id: string;
  title: string;
  content: string[];
}

// --- Data ---
const TERMS_SECTIONS: Section[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    content: [
      'Welcome to Biz-Go ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website and services (collectively, the "Service") operated by Biz-Go.',
      'By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.',
      'We reserve the right to update or change these Terms at any time. We will notify you of any changes by posting the new Terms on this page.'
    ]
  },
  {
    id: 'use',
    title: '2. Use of Service',
    content: [
      'You may use our Service only for lawful purposes and in accordance with these Terms.',
      'You agree not to use the Service:',
      '• In any way that violates any applicable federal, state, local, or international law or regulation',
      '• To transmit any unauthorized advertising or promotional materials',
      '• To impersonate or attempt to impersonate Biz-Go, a Biz-Go employee, another user, or any other person or entity',
      '• To engage in any other conduct that restricts or inhibits anyone\'s use or enjoyment of the Service'
    ]
  },
  {
    id: 'account',
    title: '3. User Accounts',
    content: [
      'When you create an account with us, you must provide information that is accurate, complete, and current at all times.',
      'You are responsible for safeguarding the password and for all activities that occur under your account.',
      'You agree to notify us immediately of any unauthorized access to or use of your account.',
      'You may not use a username that is offensive, vulgar, or infringes on someone else\'s rights.'
    ]
  },
  {
    id: 'free',
    title: '4. Free Service & Donations',
    content: [
      'Biz-Go is provided as a FREE service. There are no hidden charges or subscription fees for using our basic tools.',
      'We accept voluntary donations through various platforms (Buy Me a Coffee, Trakteer, Saweria, Payoneer) to help maintain and improve our services.',
      'Donations are entirely optional and do not provide any additional features or preferential treatment.',
      'All donations are non-refundable and are considered as support for our development efforts.'
    ]
  },
  {
    id: 'property',
    title: '5. Intellectual Property',
    content: [
      'The Service and its original content, features, and functionality are and will remain the exclusive property of Biz-Go and its licensors.',
      'The Service is protected by copyright, trademark, and other laws. Our trademarks may not be used without our prior written consent.',
      'You retain ownership of any content you create using our Service. However, you grant us a license to use, modify, and display such content for the purpose of operating and improving the Service.',
      'Any feedback, suggestions, or ideas you provide about our Service may be used by us without any obligation to compensate you.'
    ]
  },
  {
    id: 'data',
    title: '6. Data Storage & Privacy',
    content: [
      'Your data is stored locally in your browser\'s localStorage. We do not store your business data on our servers.',
      'We are not responsible for any loss of data due to browser cache clearing, device changes, or technical issues.',
      'We recommend regularly exporting and backing up your important data.',
      'For information about how we collect and use your information, please review our Privacy Policy.'
    ]
  },
  {
    id: 'disclaimer',
    title: '7. Disclaimers',
    content: [
      'The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.',
      'We do not warrant that the Service will be uninterrupted, secure, or error-free.',
      'The business advice and templates provided are for informational purposes only and should not replace professional consultation.',
      'We are not responsible for any business decisions made based on the use of our tools.'
    ]
  },
  {
    id: 'limitation',
    title: '8. Limitation of Liability',
    content: [
      'In no event shall Biz-Go, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages.',
      'This includes without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the Service.',
      'Our liability is limited to the maximum extent permitted by law.'
    ]
  },
  {
    id: 'termination',
    title: '9. Termination',
    content: [
      'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.',
      'Upon termination, your right to use the Service will cease immediately.',
      'All provisions of the Terms which should reasonably survive termination shall survive.'
    ]
  },
  {
    id: 'governing',
    title: '10. Governing Law',
    content: [
      'These Terms shall be governed and construed in accordance with the laws of Indonesia.',
      'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.',
      'If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.'
    ]
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: [
      'If you have any questions about these Terms, please contact us at:',
      'Email: legal@biz-go.com',
      'Address: [Your Address]',
      'We will respond to your inquiry within a reasonable timeframe.'
    ]
  }
];

const LAST_UPDATED = 'November 17, 2025';
const EFFECTIVE_DATE = 'November 17, 2025';

// --- Components ---
export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
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
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition">
                Privacy Policy
              </Link>
              <Link href="/get-started" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-blue-100">
            Last updated: {LAST_UPDATED} | Effective: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {TERMS_SECTIONS.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-2">
                  Need Help?
                </p>
                <p className="text-xs text-blue-700 mb-3">
                  Contact our legal team for any questions about these terms.
                </p>
                <Link
                  href="/contact"
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 max-w-3xl">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📌</span>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Important Notice
                  </p>
                  <p className="text-sm text-gray-700">
                    Please read these Terms of Service carefully before using Biz-Go. 
                    By using our Service, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {TERMS_SECTIONS.map(section => (
                <section key={section.id} id={section.id} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Agreement Section */}
            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">
                Your Agreement
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                By clicking `&#34;`I Agree`&#34;` or by using our Service, you acknowledge that you have 
                read and understood these Terms of Service and agree to be bound by them.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/get-started"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  I Agree - Continue
                </Link>
                <Link
                  href="/"
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2025 Biz-Go. All rights reserved. | 
            <Link href="/terms" className="ml-1 hover:text-white">Terms</Link> | 
            <Link href="/privacy" className="ml-1 hover:text-white">Privacy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}