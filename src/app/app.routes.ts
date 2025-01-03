import { Routes } from '@angular/router';
import { PlaylistInsightsComponent } from './playlist-insights/playlist-insights.component';
import { UrlPlaylistInsightsComponent } from './url-playlist-insights/url-playlist-insights.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default page
  { path: 'playlistInsights/:playlist_id', component: PlaylistInsightsComponent }, 
  { path: 'urlPlaylistInsights', component: UrlPlaylistInsightsComponent }, 
];