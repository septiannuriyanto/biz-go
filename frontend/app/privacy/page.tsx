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
  icon?: string;
}

interface DataType {
  type: string;
  description: string;
  usage: string;
  retention: string;
}

// --- Data ---
const PRIVACY_SECTIONS: Section[] = [
  {
    id: 'intro',
    title: '1. Introduction',
    icon: '👋',
    content: [
      'Welcome to Biz-Go\'s Privacy Policy. We respect your privacy and are committed to protecting your personal data.',
      'This Privacy Policy explains how we collect, use, store, and protect your information when you use our Service.',
      'We believe in complete transparency about our data practices, especially since Biz-Go is a free service that prioritizes user privacy.',
      'By using Biz-Go, you agree to the collection and use of information in accordance with this policy.'
    ]
  },
  {
    id: 'collection',
    title: '2. Information We Collect',
    icon: '📊',
    content: [
      'We collect minimal information to provide and improve our Service:',
      '• Account Information: When you register, we collect your name, email address, and password (encrypted).',
      '• Usage Data: We may collect information about how you access and use the Service (pages visited, features used).',
      '• Device Information: Browser type, IP address (anonymized), operating system, and device type.',
      '• Cookies: We use essential cookies for authentication and to remember your preferences.',
      'Important: Your business data (BMC, SWOT analysis, etc.) is stored locally in your browser\'s localStorage and is NOT sent to our servers.'
    ]
  },
  {
    id: 'use',
    title: '3. How We Use Your Information',
    icon: '🎯',
    content: [
      'We use the collected information for the following purposes:',
      '• To provide and maintain our Service',
      '• To authenticate users and secure accounts',
      '• To send important service updates and notifications',
      '• To respond to your customer service requests',
      '• To improve and optimize our Service based on usage patterns',
      '• To comply with legal obligations',
      'We DO NOT sell, trade, or rent your personal information to third parties.',
      'We DO NOT use your business data for any purpose, as it remains in your browser.'
    ]
  },
  {
    id: 'storage',
    title: '4. Data Storage & Security',
    icon: '🔒',
    content: [
      'Your data is stored in two ways:',
      '• Personal Account Data: Securely stored on our encrypted servers with industry-standard protection.',
      '• Business Data: Stored exclusively in your browser\'s localStorage - we have no access to this data.',
      'Security measures we implement:',
      '• SSL/TLS encryption for all data transmission',
      '• Encrypted password storage using bcrypt',
      '• Regular security audits and updates',
      '• Limited access to personal data (only authorized personnel)',
      'While we strive to protect your data, no method of electronic storage is 100% secure.'
    ]
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking',
    icon: '🍪',
    content: [
      'We use minimal cookies essential for the Service to function:',
      '• Authentication Cookies: To keep you logged in',
      '• Preference Cookies: To remember your settings',
      '• Security Cookies: To prevent fraudulent use',
      'We do NOT use:',
      '• Third-party advertising cookies',
      '• Social media tracking pixels',
      '• Behavioral tracking cookies',
      'You can disable cookies in your browser settings, but this may affect Service functionality.'
    ]
  },
  {
    id: 'sharing',
    title: '6. Data Sharing & Third Parties',
    icon: '🤝',
    content: [
      'We may share your information only in these limited circumstances:',
      '• With your consent: When you explicitly agree to share',
      '• For legal reasons: To comply with laws, regulations, or valid legal requests',
      '• For safety: To protect rights, property, or safety of Biz-Go, users, or the public',
      '• Business transfers: In case of merger, acquisition, or sale of assets (users will be notified)',
      'Third-party services we use:',
      '• Cloud hosting providers (for server infrastructure)',
      '• Email service providers (for transactional emails)',
      '• Analytics tools (anonymized data only)',
      'All third parties are required to maintain data confidentiality.'
    ]
  },
  {
    id: 'rights',
    title: '7. Your Rights & Choices',
    icon: '✅',
    content: [
      'You have the following rights regarding your personal data:',
      '• Access: Request a copy of your personal data',
      '• Correction: Update or correct inaccurate data',
      '• Deletion: Request deletion of your account and personal data',
      '• Portability: Receive your data in a machine-readable format',
      '• Objection: Object to certain processing of your data',
      '• Withdrawal: Withdraw consent at any time',
      'To exercise these rights, contact us at privacy@biz-go.com',
      'For business data in localStorage, you have full control and can delete it anytime from your browser.'
    ]
  },
  {
    id: 'children',
    title: '8. Children\'s Privacy',
    icon: '👶',
    content: [
      'Biz-Go is not intended for children under the age of 13.',
      'We do not knowingly collect personal information from children under 13.',
      'If we discover that a child under 13 has provided us with personal information, we will delete it immediately.',
      'If you believe we have collected information from a child under 13, please contact us immediately.'
    ]
  },
  {
    id: 'international',
    title: '9. International Data Transfers',
    icon: '🌍',
    content: [
      'Your information may be transferred to and maintained on servers located outside your country.',
      'We ensure that such transfers comply with applicable data protection laws.',
      'By using our Service, you consent to the transfer of your information to our facilities and those third parties with whom we share it as described in this policy.'
    ]
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    icon: '📝',
    content: [
      'We may update our Privacy Policy from time to time.',
      'We will notify you of any changes by:',
      '• Posting the new Privacy Policy on this page',
      '• Updating the "Last Updated" date',
      '• Sending an email notification for significant changes',
      'We encourage you to review this Privacy Policy periodically.',
      'Continued use of the Service after changes constitutes acceptance of the updated policy.'
    ]
  },
  {
    id: 'contact',
    title: '11. Contact Information',
    icon: '📧',
    content: [
      'If you have questions or concerns about this Privacy Policy, please contact us:',
      'Data Protection Officer',
      'Email: privacy@biz-go.com',
      'Address: [Your Company Address]',
      'Response time: Within 48 hours for general inquiries',
      'For urgent privacy concerns, please include "URGENT" in your email subject.'
    ]
  }
];

const DATA_TYPES: DataType[] = [
  {
    type: 'Email Address',
    description: 'Used for account creation and communication',
    usage: 'Authentication, notifications',
    retention: 'Until account deletion'
  },
  {
    type: 'Name',
    description: 'For personalization and identification',
    usage: 'Account management',
    retention: 'Until account deletion'
  },
  {
    type: 'Password',
    description: 'Encrypted for account security',
    usage: 'Authentication only',
    retention: 'Until changed or account deletion'
  },
  {
    type: 'IP Address',
    description: 'Anonymized for security and analytics',
    usage: 'Security, geographic statistics',
    retention: '90 days'
  },
  {
    type: 'Usage Analytics',
    description: 'Aggregated data about feature usage',
    usage: 'Service improvement',
    retention: '1 year'
  },
  {
    type: 'Business Data',
    description: 'BMC, SWOT, etc. (stored in browser only)',
    usage: 'Not accessed by us',
    retention: 'User-controlled'
  }
];

const LAST_UPDATED = 'November 17, 2025';

// --- Components ---
export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [showDataTable, setShowDataTable] = useState(false);

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
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition">
                Terms
              </Link>
              <Link href="/get-started" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-green-100 mb-2">
            Your privacy is our priority
          </p>
          <p className="text-sm text-green-200">
            Last Updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
            <span>🛡️</span>
            Privacy at a Glance
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">Your Data, Your Control</p>
                <p className="text-sm text-gray-600">Business data stays in your browser</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">No Data Selling</p>
                <p className="text-sm text-gray-600">We never sell your information</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="font-medium text-gray-900">Minimal Collection</p>
                <p className="text-sm text-gray-600">Only what`&#39;`s necessary</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Navigate Policy</h3>
              <nav className="space-y-1">
                {PRIVACY_SECTIONS.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      activeSection === section.id
                        ? 'bg-green-50 text-green-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{section.icon}</span>
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900 mb-2">
                  Privacy Questions?
                </p>
                <p className="text-xs text-blue-700 mb-3">
                  Our privacy team is here to help clarify any concerns.
                </p>
                <a
                  href="mailto:privacy@biz-go.com"
                  className="text-xs text-blue-600 hover:underline font-medium"
                >
                  Email Privacy Team →
                </a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 max-w-3xl">
            
            {/* Data Collection Summary Table */}
            <div className="mb-8">
              <button
                onClick={() => setShowDataTable(!showDataTable)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <span>📊</span>
                <span className="font-medium">View Data Collection Summary</span>
                <span className={`transform transition ${showDataTable ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {showDataTable && (
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Data Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Usage
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Retention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {DATA_TYPES.map((data, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {data.type}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {data.description}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {data.usage}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {data.retention}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Privacy Sections */}
            <div className="prose prose-gray max-w-none">
              {PRIVACY_SECTIONS.map(section => (
                <section key={section.id} id={section.id} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">{section.icon}</span>
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

            {/* GDPR/CCPA Compliance Note */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <span>⚖️</span>
                Compliance & Regulations
              </h3>
              <p className="text-sm text-blue-800 mb-3">
                Biz-Go complies with major data protection regulations including:
              </p>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>GDPR</strong> (General Data Protection Regulation) for EU users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>CCPA</strong> (California Consumer Privacy Act) for California residents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Indonesian Data Protection Laws</strong> for local compliance</span>
                </li>
              </ul>
            </div>

            {/* User Actions */}
            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">
                Take Action on Your Privacy
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/account/privacy"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span>⚙️</span>
                  <span className="font-medium">Privacy Settings</span>
                </Link>
                <Link
                  href="/account/download-data"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span>📥</span>
                  <span className="font-medium">Download My Data</span>
                </Link>
                <Link
                  href="/account/delete"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span>🗑️</span>
                  <span className="font-medium">Delete Account</span>
                </Link>
                <a
                  href="mailto:privacy@biz-go.com"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <span>📧</span>
                  <span className="font-medium">Contact Privacy Team</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-8 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-400">
              © 2025 Biz-Go. We respect your privacy.
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/privacy" className="text-white font-medium">Privacy</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}