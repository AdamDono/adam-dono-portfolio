export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string; // Optional project link
  featured?: boolean; // Optional featured flag
}