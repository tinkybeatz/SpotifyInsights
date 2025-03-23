import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private location: Location) {}
  languageNav: string = navigator.language;
  language: string = 'English';
  page: string = 'Home';

  navigateToHome() {
    this.page = 'Home';
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

  gotToPlaylist(data: string) {
    this.router.navigate(['/playlistInsights', data]);
  }
}
