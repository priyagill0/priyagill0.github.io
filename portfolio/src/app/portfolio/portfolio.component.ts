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
    {id: 0, name: 'Risk Analytics in Banking:\nUnderstanding Loan Default Tendencies', summary: 'For our final project in Math 1130, we conducted a detailed data analysis on loan default risk factors in consumer banking. Using real-world lending data, we explored how different consumer attributes, loan characteristics, and previous loan histories impact the likelihood of loan defaults.', description: '', projectLink: 'https://github.com/priyagill0/Data-Science-Case-Studies/blob/main/Math%201130%20Final%20Project%20Report.pdf', tags: [Tag.Java, Tag.Angular], pictures: []},
    {id: 1, name: 'Customer Sentiment Analysis on Amazon Reviews', summary: 'For this project, I explored over 1 million Amazon product reviews focused on movies and television. I applied Natural Language Processing (NLP) techniques and feature engineering to identify factors influencing customer satisfaction and dissatisfaction. I investigated sentiment trends, word frequency patterns, and statistically significant shifts in average review ratings over time.', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []},
    {id: 2, name: 'Analyzing Environmental Health and Air Pollution (WHO / World Bank Data)', summary: 'In this project, I analyzed global air pollution data to assess environmental impact and health risks. Working with poorly documented datasets from the World Bank and WHO, I performed extensive data cleaning across multiple CSV files. I also conducted exploratory data analysis to track emissions trends and examined how pollution levels correlated with mortality rates and geographic regions. This case study involved time series analysis, data wrangling, and interpreting environmental data for policy recommendations. ', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []},
    {id: 3, name: 'Client Feedback Management Platform (RBC Hackathon - 2024)', summary: 'As part of the RBC IS IT Hackathon in April 2024, I collaborated with a team of co-op students to design and develop a Client Feedback Management Platform aimed at streamlining how Client Relationship Managers (CRMs) capture and manage client feedback. I built a responsive web interface using React and developed the back-end services in Java with Spring Boot, supported by a MongoDB database. By implementing a RESTful API, we ensured smooth data flow between the front-end and back-end layers.', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []},
    {id: 4, name: 'Regulations Team AI Summarization Tool (RBC Hackathon - 2025)', summary: 'Built an AI-powered summarization tool for the Regulations team using Angular, FastAPI, and an OpenAI LLM. Enabled users to upload URLs or Excel files and receive business-context-aware summaries with relevancy justifications. Implemented web scraping, document chunking, and custom prompt engineering to optimize performance and output quality.', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular], pictures: []}

  ]
    


  constructor(private titleService: Title) {
    this.titleService.setTitle('Priya Gill - Portfolio');
  }
}
