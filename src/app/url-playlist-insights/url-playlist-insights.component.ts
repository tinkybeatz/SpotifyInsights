import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-insights',
  standalone: true,
  templateUrl: './url-playlist-insights.component.html',
})
export class UrlPlaylistInsightsComponent {
  constructor() {}

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
        console.log(playlist_id);
        const playlistElement = document.getElementById('playlist_id');
        if (playlistElement) {
          playlistElement.innerText = playlist_id;
        }
      }
    }
  }
}
