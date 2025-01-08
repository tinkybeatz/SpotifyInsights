import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UrlPlaylistInsightsComponent } from '../url-playlist-insights/url-playlist-insights.component';
import { PlaylistInsightsComponent } from '../playlist-insights/playlist-insights.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-insights-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    UrlPlaylistInsightsComponent,
    PlaylistInsightsComponent,
  ],
  templateUrl: './playlist-insights-page.component.html',
  styleUrls: ['./playlist-insights-page.component.scss'],
})
export class PlaylistInsightsPageComponent {
  playlistId: string | null = null;

  onPlaylistSelected(newId: string) {
    this.playlistId = newId;
  }

  resetId(){
    this.playlistId = null;
  }
}