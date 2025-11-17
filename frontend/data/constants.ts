import { Feature, Tool } from "@/types/types";

// --- Data ---
export const TOOLS: Tool[] = [
  {
    id: 'bmc-builder',
    name: 'BMC Builder',
    description: 'Generate dan edit Business Model Canvas dengan AI',
    icon: '📊',
    href: '/bmc-builder',
    category: 'Planning',
    isPremium: false,
  },
  {
    id: 'swot-analysis',
    name: 'SWOT Analysis',
    description: 'Analisis kekuatan, kelemahan, peluang, dan ancaman bisnis',
    icon: '🎯',
    href: '/swot-analysis',
    category: 'Analysis',
    isComingSoon: true,
  },
  {
    id: 'pitch-deck',
    name: 'Pitch Deck Generator',
    description: 'Buat pitch deck profesional dalam hitungan menit',
    icon: '🎤',
    href: '/pitch-deck',
    category: 'Presentation',
    isPremium: true,
    isComingSoon: true,
  },
  {
    id: 'market-research',
    name: 'Market Research Tool',
    description: 'Riset pasar dan analisis kompetitor otomatis',
    icon: '🔍',
    href: '/market-research',
    category: 'Research',
    isPremium: true,
    isComingSoon: true,
  },
  {
    id: 'financial-projection',
    name: 'Financial Projection',
    description: 'Proyeksi keuangan dan cash flow untuk bisnis',
    icon: '💰',
    href: '/financial',
    category: 'Finance',
    isComingSoon: true,
  },
  {
    id: 'lean-canvas',
    name: 'Lean Canvas',
    description: 'Template Lean Canvas untuk startup dan bisnis baru',
    icon: '🚀',
    href: '/lean-canvas',
    category: 'Planning',
    isComingSoon: true,
  },
];

export const FEATURES: Feature[] = [
  {
    icon: '⚡',
    title: 'Cepat & Efisien',
    description: 'Generate business tools dalam hitungan detik dengan AI'
  },
  {
    icon: '🎨',
    title: 'Fully Editable',
    description: 'Edit dan sesuaikan hasil sesuai kebutuhan bisnis Anda'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Akses dari desktop, tablet, atau smartphone'
  },
  {
    icon: '🔒',
    title: 'Data Aman',
    description: 'Data tersimpan lokal di browser Anda'
  }
];

export const CATEGORIES = ['All', 'Planning', 'Analysis', 'Research', 'Finance', 'Presentation'];
