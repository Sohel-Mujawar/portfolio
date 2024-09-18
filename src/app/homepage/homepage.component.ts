import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor(private router: Router) { }
  skills = [
    { title: 'HTML', percent: 95 },
    { title: 'CSS', percent: 85 },
    { title: 'Tailwind CSS', percent: 70 },
    { title: 'JavaScript', percent: 70 },
    { title: 'Typescript', percent: 80 },
    { title: 'ReactJs', percent: 80 },
    { title: 'Angular', percent: 80 },
    { title: 'NodeJs', percent: 90 }

  ];

  currentSkill = this.skills[0];  // Default to the first skill

  circumference = 2 * Math.PI * 120;

  selectSkill(skill: { title: string, percent: number }) {
    this.currentSkill = skill;
  }


  readMore(path: string): void{
    this.router.navigate([path]);
  }

}
