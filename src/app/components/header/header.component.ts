import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  // Toggle mobile menu
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Show submenu on desktop hover
  showDropdown(menu: string) {
    if (window.innerWidth > 768) { // Only for desktop
      this.activeDropdown = menu;
    }
  }

  // Hide submenu on desktop when leaving
  hideDropdown(menu: string) {
    if (window.innerWidth > 768) {
      if (this.activeDropdown === menu) {
        this.activeDropdown = null;
      }
    }
  }

  // Toggle submenu in mobile view
  toggleDropdown(menu: string) {
    if (window.innerWidth <= 768) { // Only for mobile
      this.activeDropdown = this.activeDropdown === menu ? null : menu;
    }
  }
}
