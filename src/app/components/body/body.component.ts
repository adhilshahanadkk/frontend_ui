import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  conditions = [
    { name: 'Abuse', link: '#://screening.mhanational.org/condition/abuse/' },
    { name: 'Addiction', link: '#://screening.mhanational.org/addiction/' },
    { name: 'ADHD', link: '#://screening.mhanational.org/adhd/' },
    { name: 'Anxiety', link: '#://screening.mhanational.org/anxiety/' },
    { name: 'Bipolar', link: '#://screening.mhanational.org/bipolar/' },
    { name: 'Depression', link: '#://screening.mhanational.org/depression/' },
    { name: 'Sleep', link: '#://screening.mhanational.org/condition/sleep/' },
    { name: 'Suicide', link: '#://screening.mhanational.org/suicide/' },
  ];

  articles = [
    { title: 'I don’t want to live, but I don’t want to die.', link: '#://screening.mhanational.org/content/i-dont-want-live-i-dont-want-die/' },
    { title: 'Need to talk to someone? (Warmlines)', link: '#://screening.mhanational.org/content/need-talk-someone-warmlines/' },
    { title: 'Am I depressed or just sad?', link: '#://screening.mhanational.org/content/am-i-depressed-or-just-sad/' },
    { title: 'I hate myself', link: '#://screening.mhanational.org/content/i-hate-myself/' },
  ];

}

