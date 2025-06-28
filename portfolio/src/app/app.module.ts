import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
    declarations: [
    
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      HomeComponent,
      ResumeComponent,
      PortfolioComponent,
      ContactComponent,
      HeaderComponent,
      NavComponent,
      AppComponent
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModule { }
  