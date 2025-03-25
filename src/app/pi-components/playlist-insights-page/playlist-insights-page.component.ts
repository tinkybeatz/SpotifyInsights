import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UrlPlaylistInsightsComponent } from '../url-playlist-insights/url-playlist-insights.component';
import { SpotifyPlaylistInsightsComponent } from '../spotify-playlist-insights/spotify-playlist-insights.component';
import { CommonModule } from '@angular/common';
import { DeezerPlaylistInsightsComponent } from "../deezer-playlist-insights/deezer-playlist-insights.component";
import { AppleMusicPlaylistInsightsComponent } from "../apple-music-playlist-insights/apple-music-playlist-insights.component";
import { SoundcloudPlaylistInsightsComponent } from "../soundcloud-playlist-insights/soundcloud-playlist-insights.component";

@Component({
  selector: 'app-playlist-insights-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    UrlPlaylistInsightsComponent,
    SpotifyPlaylistInsightsComponent,
    DeezerPlaylistInsightsComponent,
    AppleMusicPlaylistInsightsComponent,
    SoundcloudPlaylistInsightsComponent
],
  templateUrl: './playlist-insights-page.component.html',
  styleUrls: ['./playlist-insights-page.component.scss'],
})
export class PlaylistInsightsPageComponent {
  playlistId: string | null = null;
  playlistType: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const newType = params.get('page') || '';
      if (this.playlistType !== newType) {
        this.playlistType = newType;
        this.resetId();
      }
    });
  }

  onPlaylistSelected(newId: string) {
    this.playlistId = newId;
  }

  resetId(){
    this.playlistId = null;
  }
}