import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-soundcloud-playlist-insights',
  standalone: true,
  imports: [],
  templateUrl: './soundcloud-playlist-insights.component.html',
  styleUrl: './soundcloud-playlist-insights.component.css'
})
export class SoundcloudPlaylistInsightsComponent {
  @Input() playlistId: string | null = null;
}
