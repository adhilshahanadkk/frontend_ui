import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@Component({
  selector: 'app-root',
  standalone: true,  //Using standalone mode
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatbotComponent], //Importing necessary components
  template: `
    <app-header></app-header>
    <app-chatbot></app-chatbot>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'md-sample';
}
