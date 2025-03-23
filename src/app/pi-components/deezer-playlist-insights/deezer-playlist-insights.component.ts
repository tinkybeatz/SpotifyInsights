import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deezer-playlist-insights',
  standalone: true,
  imports: [],
  templateUrl: './deezer-playlist-insights.component.html',
  styleUrl: './deezer-playlist-insights.component.css',
})
export class DeezerPlaylistInsightsComponent {
  @Input() playlistId: string | null = null;
}
