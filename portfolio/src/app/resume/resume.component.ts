import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Priya Gill - Resume');
  }
}

// import { AfterViewInit, Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-resume',
//   standalone: true,
//   imports: [],
//   templateUrl: './resume.component.html',
//   styleUrl: './resume.component.scss'
// })
// export class ResumeComponent implements AfterViewInit {
//   constructor(private titleService: Title) {
//     this.titleService.setTitle('Priya Gill - Resume');
//   }

//   ngAfterViewInit(): void {
//     const skillsSection = document.querySelector('#skills');
//     const skillItems = document.querySelectorAll('.skill-item');

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           skillItems.forEach(item => item.classList.add('visible'));
//           observer.unobserve(entry.target);  // Only trigger once
//         }
//       });
//     }, {
//       threshold: 0.2
//     });

//     if (skillsSection) {
//       observer.observe(skillsSection);
//     }
//   }
// }
