import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from '../_models/Projects'; // for project structure
import { CommonModule } from '@angular/common'; // for common directives ex: ngfor

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
// @Input() projectName: string = '';
@Input() project = {} as Project;
}
