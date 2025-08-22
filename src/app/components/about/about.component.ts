import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutText = `I'm a passionate UI/UX designer and developer with a love for creating digital experiences that not only look beautiful but also solve real problems for users and businesses.

My expertise spans across user research, interaction design, visual design, and front-end development. I believe in the power of design thinking and user-centered approach to create products that truly make a difference.`;

  stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '5+', label: 'Happy Clients' },
    { number: '10+', label: 'Projects Completed' }
  ];

  services = [
    { title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces' },
    { title: 'Prototyping', description: 'Building interactive prototypes to test ideas' },
    { title: 'User Research', description: 'Understanding user needs and behaviors' },
    { title: 'Frontend Development', description: 'Turning designs into functional code' }
  ];
}
