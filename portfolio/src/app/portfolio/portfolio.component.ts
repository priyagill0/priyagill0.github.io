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
    {id: 0, name: 'Aura Beauty - E-Commerce Website', summary: 'Built a full-stack B2C e-commerce website as a team using Spring Boot and Next.js. The application follows both a 3-tier architecture and the MVC pattern, with a RESTful backend exposing APIs consumed by the frontend. Features include product browsing, add to cart, checkout, user accounts, and admin inventory/order management. The system uses a MySQL database, JPA repositories, and Docker for deployment and containerization.', description: '', projectLink: 'https://github.com/priyagill0/E-Commerce-Aura-Beauty', tags: [Tag.Java, Tag.Nextjs, Tag.SPRINGBOOT, Tag.MYSQL, Tag.Docker, ], media: []},
    {id: 0, name: 'CashTag - Budget & Shared Expense Tracking Platform', summary: 'Cashtag is a full-stack budget and expense tracking web application that helps individuals and groups manage shared finances like rent, trips, and daily expenses. We implemented a Spring Boot RESTful backend, Next.js frontend, and PostgreSQL database, allowing users to track spending, split costs fairly, and visualize expenses through charts and reports.', description: '', publicUrl:"https://cashtag-deploy.vercel.app", projectLink: 'https://github.com/EECS3311F25/project-cashtag', tags: [Tag.Java, Tag.Nextjs, Tag.SPRINGBOOT, Tag.PostgreSQL ], media: []},

    {id: 0, name: 'Risk Analytics in Banking:\nUnderstanding Loan Default Tendencies', summary: 'For this data science project, I conducted a detailed data analysis on loan default risk factors in consumer banking. Using real-world lending data, I explored how different consumer attributes, loan characteristics, and previous loan histories impact the likelihood of loan defaults.', description: '', projectLink: 'https://github.com/priyagill0/Data-Science-Case-Studies/blob/main/Risk-Analytics-In-Banking.pdf', tags: [Tag.Python, Tag.PANDAS, Tag.NUMPY], media: []},
    {id: 1, name: 'Customer Sentiment Analysis on Amazon Reviews', summary: 'I analyzed Amazon reviews focused on movies and television. I applied Natural Language Processing (NLP) techniques and feature engineering to identify factors influencing customer satisfaction and dissatisfaction. I investigated sentiment trends, word frequency patterns, and statistically significant shifts in average review ratings over time.', description: '', projectLink: 'https://github.com/priyagill0/Data-Science-Case-Studies/blob/main/Customer-Sentiment-Analysis-on-Amazon-Reviews.pdf', tags: [Tag.Python, Tag.PANDAS, Tag.NUMPY, Tag.SEABORN, Tag.MATPLOTLIB], media: []},
    {id: 2, name: 'Analyzing Environmental Health and Air Pollution\n(WHO / World Bank Data)', summary: 'In this project, I analyzed global air pollution data to assess environmental impact and health risks. I performed extensive data cleaning across multiple CSV files. I also conducted exploratory data analysis to track emissions trends and examined how pollution levels correlated with mortality rates and geographic regions.', description: '', projectLink: 'https://github.com/priyagill0/Data-Science-Case-Studies/blob/main/Analyzing-Environmental-Health-and-Air-Pollution.pdf', tags: [Tag.Python, Tag.PANDAS, Tag.NUMPY, Tag.MATPLOTLIB], media: []},
    // {id: 3, name: 'Client Feedback Management Platform', summary: 'As part of the RBC IS IT Hackathon in April 2024, I collaborated with a team of co-op students to design and develop a Client Feedback Management Platform aimed at streamlining how Client Relationship Managers (CRMs) capture and manage client feedback. I built a responsive web interface using React and developed the back-end services in Java with Spring Boot, supported by a MongoDB database.', description: '', projectLink: '', tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.Java, Tag.SPRINGBOOT, Tag.MongoDB], media: []},
    // {id: 4, name: 'RBC Regulations Team: AI Summarization Tool', summary: 'As part of the RBC IS IT Hackathon in April 2025, my team built an AI-powered summarization tool for the Regulations team using Angular, FastAPI, and an OpenAI LLM. We enabled users to upload URLs or Excel files and receive business-context-aware summaries with relevancy justifications. Implemented web scraping, document chunking, and custom prompt engineering.', description: '', projectLink: '', tags: [Tag.Python, Tag.Angular, Tag.OPENAI, Tag.LANGCHAIN, Tag.FastAPI], media: []},
    {id: 5, name: 'Canadian Food Nutrition Database (ER Modeling & SQL Design)', summary: 'Designed and implemented a relational database for managing food products, ingredients, nutritional details, and store availability across Canada. Delivered an ER diagram, SQL schema, and data integrity constraints using MySQL.', description: '', projectLink: 'https://github.com/priyagill0/Canadian-Food-Nutrition-Database-', tags: [Tag.SQL, Tag.MYSQL], media: []}

    //Database Design Projects
  ]
    


  constructor(private titleService: Title) {
    this.titleService.setTitle('Priya Gill - Portfolio');
  }
}
