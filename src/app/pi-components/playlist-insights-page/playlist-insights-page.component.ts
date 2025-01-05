import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UrlPlaylistInsightsComponent } from '../url-playlist-insights/url-playlist-insights.component';
import { PlaylistInsightsComponent } from '../playlist-insights/playlist-insights.component';

@Component({
  selector: 'app-playlist-insights-page',
  imports: [
    NavbarComponent,
    // UrlPlaylistInsightsComponent,
    PlaylistInsightsComponent,
  ],
  templateUrl: './playlist-insights-page.component.html',
  styleUrls: ['./playlist-insights-page.component.scss'],
})
export class PlaylistInsightsPageComponent {
  state: 'urlInput' | 'playlistView' = 'urlInput';
  playlistId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.state = params['state'] || 'urlInput';
      this.playlistId = params['playlistId'] || null;
    });
  }

  navigateToPlaylist(playlistId: string) {
    this.router.navigate([], {
      queryParams: { state: 'playlistView', playlistId },
      queryParamsHandling: 'merge',
    });
  }
}