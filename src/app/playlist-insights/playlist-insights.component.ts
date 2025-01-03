import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-playlist-insights',
  templateUrl: './playlist-insights.component.html',
})
export class PlaylistInsightsComponent implements OnInit {
  playlistId: string | null = null;
  playlistInfo: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.playlistId = params.get('playlist_id'); // Assign the parameter to the class property
      console.log("Here is the given ID:", this.playlistId);

      if (this.playlistId) {
        this.getPlaylistInfo(this.playlistId); // Call the Axios function
      }
    });
  }

  // Use axios to fetch data from the API
  async getPlaylistInfo(playlistId: string): Promise<void> {
    try {
      const response = await axios.get(`https://spotify-insights-api.vercel.app/playlist_info/${playlistId}`);
      console.log("Playlist info:", response.data);
      this.playlistInfo = JSON.stringify(response.data); // Store the response in a string format
    } catch (error) {
      console.error("Error fetching playlist info:", error);
    }
  }
}