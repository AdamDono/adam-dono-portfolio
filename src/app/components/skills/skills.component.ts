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
        { name: "Figma", percentage: 84, icon: "fab fa-figma" },
        { name: "Adobe Creative Suite", percentage: 90, icon: "fab fa-adobe" },
        { name: "Sketch", percentage: 85, icon: "fab fa-sketch" },
        { name: "Framer", percentage: 80, icon: "fas fa-cube" }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", percentage: 95, icon: "fab fa-html5" },
        { name: "JavaScript", percentage: 90, icon: "fab fa-js-square" },
        { name: "React", percentage: 85, icon: "fab fa-react" },
        { name: "TypeScript", percentage: 80, icon: "fas fa-code" },
        { name: "Angular", percentage: 90, icon: "fab fa-angular" },
        { name: "Python", percentage: 80, icon: "fab fa-python" },
        { name: "Flask", percentage: 80, icon: "fas fa-flask" }
      ]
    },
    {
      title: "Specialties",
      skills: [
        { name: "Mobile Design", percentage: 90, icon: "fas fa-mobile-alt" },
        { name: "Responsive Design", percentage: 85, icon: "fas fa-desktop" },
        { name: "Design Systems", percentage: 90, icon: "fas fa-puzzle-piece" },
        { name: "Accessibility", percentage: 85, icon: "fas fa-universal-access" }
      ]
    }
  ];
}