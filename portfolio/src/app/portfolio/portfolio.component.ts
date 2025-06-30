import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag'; // for project tags
import { CommonModule } from '@angular/common'; // for common directives ex: ngfor
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  project: Project[] = 
  [
    {id: 0, name: 'Hackathon 1', summary: 'summary 1', description: '', projectLink: '', tags: [Tag.Java, Tag.Angular], pictures: []},
    {id: 1, name: 'Hackathon 2', summary: 'summary 2', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []},
    {id: 2, name: 'Hackathon 2', summary: 'summary 2', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []}

  ]
    


  constructor(private titleService: Title) {
    this.titleService.setTitle('Priya Gill - Portfolio');
  }
}
