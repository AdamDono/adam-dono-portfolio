import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutText = `I’m a passionate full stack developer & UI/UX designer with a love for creating digital experiences that not only look beautiful but also solve real-world problems.
  
  My expertise spans user research, interaction and visual design, front-end development, and backend systems. With a user-centered mindset and strong technical foundation, I bring designs to life through intuitive interfaces, scalable architectures, and seamless functionality.`;

  stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '5+', label: 'Happy Clients' },
    { number: '10+', label: 'Projects Completed' }
  ];

  services = [
    { title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { title: 'Prototyping', description: 'Building interactive prototypes to test ideas' },
    { title: 'User Research', description: 'Understanding user needs and behaviors' },
    { title: 'Frontend Development', description: 'Turning designs into functional code' },
     { 
  title: "Backend Development", 
  description: "Designing APIs, managing databases, and ensuring secure and efficient server-side logic." 
}

  ];
}
