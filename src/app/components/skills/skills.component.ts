// skills.ts
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
        { name: "Adobe Creative Suite", icon: "fab fa-adobe" },
        { name: "Sketch", icon: "fab fa-sketch" },
        { name: "Framer", icon: "fas fa-cube" }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", icon: "fab fa-html5" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "TypeScript", icon: "fas fa-code" },
        { name: "Angular", icon: "fab fa-angular" },
        { name: "Python", icon: "fab fa-python" },
        { name: "Flask", icon: "fas fa-flask" }
      ]
    },
    {
      title: "Specialties",
      skills: [
        { name: "Mobile Design", icon: "fas fa-mobile-alt" },
        { name: "Responsive Design", icon: "fas fa-desktop" },
        { name: "Design Systems", icon: "fas fa-puzzle-piece" },
        { name: "Accessibility", icon: "fas fa-universal-access" }
      ]
    }
  ];
}