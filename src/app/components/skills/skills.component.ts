import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  introText = "A comprehensive skill set combining design thinking, technical expertise, and user-centered approach to create exceptional digital experiences.";

  skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", icon: "fab fa-figma" },
        { name: "Photoshop", icon: "fas fa-image" },
        { name: "Illustrator", icon: "fas fa-pen-nib" },
        { name: "Sketch", icon: "fas fa-diamond" },
        { name: "Canva", icon: "fas fa-clapperboard" },
        { name: "Framer", icon: "fas fa-cube" }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "Angular", icon: "fab fa-angular" },
        { name: "React", icon: "fab fa-react" },
        { name: "React Native", icon: "fab fa-react" },
        { name: "Flutter", icon: "fas fa-mobile-screen-button" },
        { name: "Dart", icon: "fas fa-code" },
        { name: "Expo", icon: "fas fa-rocket" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "Python/Flask", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "MongoDB", icon: "fas fa-leaf" },
        { name: "Supabase", icon: "fas fa-bolt-lightning" },
        { name: "Firebase", icon: "fab fa-google" },
        { name: "Neon", icon: "fas fa-bolt" },
        { name: "Aiven", icon: "fas fa-cloud" }
      ]
    },
    {
      title: "Specialties",
      skills: [
        { name: "UI/UX", icon: "fas fa-laptop-code" },
        { name: "Branding", icon: "fas fa-palette" },
        { name: "Mobile", icon: "fas fa-mobile-alt" },
        { name: "Prototyping", icon: "fas fa-bolt" },
        { name: "Deployment", icon: "fas fa-server" },
        { name: "Web3", icon: "fab fa-ethereum" }
      ]
    }
  ];

  designProcess = [
    { number: '01', title: 'Discover', description: 'Deep diving into the problem space, conducting research and stakeholder interviews.' },
    { number: '02', title: 'Define', description: 'Synthesizing insights to define core problems and user needs.' },
    { number: '03', title: 'Design', description: 'Creating iterative wireframes and high-fidelity prototypes.' },
    { number: '04', title: 'Deliver', description: 'Providing developer-ready assets and design specifications.' }
  ];
}