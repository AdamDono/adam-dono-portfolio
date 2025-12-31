export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  videoUrl?: string; // Optional local video URL
  youtubeUrl?: string; // Optional YouTube embed URL
  safeVideoUrl?: any; // SafeResourceUrl for stable binding
  tags: string[];
  category: string; // Project category
  demoLink?: string; // Optional demo link
  codeLink?: string; // Optional code link
  link?: string; // Optional project link
  featured?: boolean; // Optional featured flag
  privateRepo?: boolean; // Indicates code is in a private repository

  // Case Study fields
  caseStudy?: {
    problem: string;
    solution: string;
    results: string;
    metrics?: {
      label: string;
      value: string;
      icon?: string;
    }[];
    beforeImage?: string;
    afterImage?: string;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}