import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [CommonModule],
})
export class LandingPageComponent {
  constructor(private router: Router) {}
  title = 'SpotifyInsights';
  navigateToSpotifyInsights() {
    this.router.navigate(['/spotifyPlaylistInsights']);
  }

  section: string = "Home"
  changeSection(newSection: string) {
    this.section = newSection;
    console.log("New section : ", this.section);
  }

  goToInsights(page: string) {
    this.router.navigate(['/playlistInsights', page]);
  }
}
