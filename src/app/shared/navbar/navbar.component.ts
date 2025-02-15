import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router, private location: Location) {}
  languageNav: string = navigator.language;
  language: string = 'English';

  navigateToHome() {
    this.router.navigate(['/']);
  }

  back() {
    this.location.back();
  }

  forward() {
    this.location.forward();
  }

  translate() {
    alert('coming soon');
  }
}
