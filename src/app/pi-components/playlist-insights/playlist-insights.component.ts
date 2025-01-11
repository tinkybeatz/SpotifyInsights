import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { sortPlaylistInsights } from './playlist-insights-sorting';
import { LoadingAnimationComponent } from '../../shared/loading-animation/loading-animation.component';

@Component({
  selector: 'app-playlist-insights',
  standalone: true,
  templateUrl: './playlist-insights.component-copy.html',
  imports: [CommonModule, LoadingAnimationComponent], // Add the CommonModule to the imports array
})
export class PlaylistInsightsComponent implements OnInit {
  @Input() playlistId: string | null = null;
  @ViewChild('scrollableDiv') scrollableDiv!: ElementRef;
  playlistDataFiltered:
    | {
        name: string;
        image: string;
        infoFields: { label: string; key: string | number | boolean }[];
        actualTracksCount: number;
        externalUrl: string;
        tracks: {
          trackName: string;
          artists: string[];
          album: string;
          link: string;
          image: string;
          albumLink: string;
          artistsLinks: string[];
        }[];
        albums: {
          albumName: string;
          artists: string[];
          nbSongsInPlaylist: number;
          image: string;
          albumLink: string;
        }[];
        artists: {
          artistName: string;
          nbSongsInPlaylist: number;
          artistLink: string;
        }[];
      }
    | undefined;

  constructor(private route: ActivatedRoute) {}

  loading: boolean = false;
  currentMenu: string = 'albums';
  rightBig: boolean = false;

  ngOnInit(): void {
    if (this.playlistId) {
      this.getPlaylistInfo(this.playlistId); // Call the Axios function
    }
  }

  rightBigToggle() {
    this.rightBig = !this.rightBig;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['playlistId'] && this.playlistId) {
      this.changeMenu('albums');
      // Make the API call or do anything you need when playlistId changes
      this.getPlaylistInfo(this.playlistId);
    }
  }

  changeMenu(menu: string) {
    this.currentMenu = menu;
    setTimeout(() => {
      if (this.scrollableDiv) {
        this.scrollableDiv.nativeElement.scrollTop = 0;
      }
    }, 0); // Delay to ensure the DOM updates
  }

  // Use axios to fetch data from the API
  async getPlaylistInfo(playlistId: string): Promise<void> {
    this.loading = true;
    try {
      const response = await axios.get(
        `https://spotify-insights-api.vercel.app/playlist_info/${playlistId}`
        // `http://127.0.0.1:5000/playlist_info/${playlistId}`
      );
      console.log('Playlist info:', response.data);
      this.playlistDataFiltered = sortPlaylistInsights(response.data);
      console.log('1 :', this.playlistDataFiltered.artists);
    } catch (error) {
      console.error('Error fetching playlist info:', error);
    }
    this.loading = false;
  }
}
