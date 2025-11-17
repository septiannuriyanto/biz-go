// --- Type Definitions ---
export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  isPremium?: boolean;
  isComingSoon?: boolean;
  category: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
