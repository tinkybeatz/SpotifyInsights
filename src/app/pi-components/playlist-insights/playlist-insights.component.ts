import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { sortPlaylistInsights } from './playlist-insights-sorting';

@Component({
  selector: 'app-playlist-insights',
  standalone: true,
  templateUrl: './playlist-insights.component.html',
  imports: [CommonModule], // Add the CommonModule to the imports array
})
export class PlaylistInsightsComponent implements OnInit {
  @Input() playlistId: string | null = null;
  playlistDataFiltered:
    | {
        name: string;
        infoFields: { label: string; key: string | number | boolean }[];
        actualTracksCount: number;
        externalUrl: string;
        tracks: {
          trackName: string;
          artists: string[];
          album: string;
          link: string;
        }[];
        albums: {
          albumName: string;
          artists: string[];
          nbSongsInPlaylist: number;
        }[];
        artists: { artistName: string; nbSongsInPlaylist: number }[];
      }
    | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.playlistId) {
      this.getPlaylistInfo(this.playlistId); // Call the Axios function
    }
  }

  // Use axios to fetch data from the API
  async getPlaylistInfo(playlistId: string): Promise<void> {
    try {
      const response = await axios.get(
        `https://spotify-insights-api.vercel.app/playlist_info/${playlistId}`
      );
      console.log('Playlist info:', response.data);
      this.playlistDataFiltered = sortPlaylistInsights(response.data);
    } catch (error) {
      console.error('Error fetching playlist info:', error);
    }
  }
}
