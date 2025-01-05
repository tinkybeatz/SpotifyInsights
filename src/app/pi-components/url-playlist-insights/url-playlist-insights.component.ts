import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-playlist-insights',
  standalone: true,
  templateUrl: './url-playlist-insights.component.html',
})
export class UrlPlaylistInsightsComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit() {
    // https://open.spotify.com/playlist/3aI8mappd9DyYvgIkDWy7y?si=c6d807c5eed64387
    const formInputUrl = (document.getElementById('input') as HTMLInputElement)
      .value;
    if (!formInputUrl.startsWith('https://open.spotify.com/playlist/')) {
      alert('Invalid URL. Please enter a valid Spotify playlist URL.');
      throw new Error(
        'Invalid URL. Please enter a valid Spotify playlist URL.'
      );
    } else {
      const playlist_id = formInputUrl.split('playlist/')[1].split('?')[0];
      if (playlist_id === '') {
        alert(
          'Invalid URL : Unable to identify playlist id. Please enter a valid Spotify playlist URL.'
        );
        throw new Error(
          'Invalid URL. Please enter a valid Spotify playlist URL.'
        );
      } else {
        this.navigateToPlaylistInsights(playlist_id);
      }
    }
  }

  navigateToPlaylistInsights(playlist_id: string) {
    this.router.navigate(['/playlistInsights', playlist_id]);
  }
}
