export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL
  videoUrl?: string; // Optional video URL
  tags: string[];
  category: string; // Project category
  demoLink?: string; // Optional demo link
  codeLink?: string; // Optional code link
  link?: string; // Optional project link
  featured?: boolean; // Optional featured flag
}