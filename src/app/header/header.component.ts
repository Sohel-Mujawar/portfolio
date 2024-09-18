import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule] // Add CommonModule to imports array
})
export class HeaderComponent {

  isMenuOpen: boolean = false;

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
