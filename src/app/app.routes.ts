// import { Routes } from '@angular/router';
// import { ReportPageComponent } from './report-page/report-page.component';
// import { ChatbotComponent } from './components/chatbot/chatbot.component';

// // export const routes: Routes = [];

// export const routes: Routes = [
//   { path: '', component: ChatbotComponent }, // Default route
//   { path: 'report', component: ReportPageComponent },
//   // Other routes
// ];

import { Routes } from '@angular/router';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { BodyComponent } from './components/body/body.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ReportGeneratorComponent } from './components/report-generator/report-generator.component'


export const routes: Routes = [
  { path: '', component: BodyComponent }, // Default route (ChatbotComponent)
  { path: 'report', component: ReportPageComponent }, 
  { path: 'report-generator', component: ReportGeneratorComponent},// Route for report page
];

