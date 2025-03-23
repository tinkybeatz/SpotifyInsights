import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-playlist-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-playlist-insights.component.html',
})
export class UrlPlaylistInsightsComponent {
  constructor() {}

  @Output() playlistSelected = new EventEmitter<string>();
  @Input() playlistType: string | null = null;

  ngOnInit(): void {}

  submit() {
    const formInputUrl = (document.getElementById('input') as HTMLInputElement)
      .value;
    if (!formInputUrl.startsWith('https://open.spotify.com/playlist/')) {
      alert('Invalid URL. Please enter a valid Spotify playlist URL.');
      return;
    }

    const playlistId = formInputUrl.split('playlist/')[1]?.split('?')[0];
    if (!playlistId) {
      alert('Unable to identify playlist ID. Please enter a valid URL.');
      return;
    }

    // Emit the playlistId to the parent component
    this.playlistSelected.emit(playlistId);

    (document.getElementById('input') as HTMLInputElement).value = '';
  }
}
