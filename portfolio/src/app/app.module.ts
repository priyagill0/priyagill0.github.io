import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { routes } from './app.routes';

@NgModule({
    declarations: [
        // AppComponent // Commented out because it's standalone
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routes,
        RouterModule,
        AppComponent // Added AppComponent to imports
    ],
    providers: []
})
export class AppModule { }