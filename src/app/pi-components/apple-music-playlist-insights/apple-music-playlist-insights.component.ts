import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apple-music-playlist-insights',
  standalone: true,
  imports: [],
  templateUrl: './apple-music-playlist-insights.component.html',
  styleUrl: './apple-music-playlist-insights.component.css'
})
export class AppleMusicPlaylistInsightsComponent {
  @Input() playlistId: string | null = null;
}
