import { Routes } from '@angular/router';
import { PlaylistInsightsComponent } from './pi-components/playlist-insights/playlist-insights.component';
import { UrlPlaylistInsightsComponent } from './pi-components/url-playlist-insights/url-playlist-insights.component';
import { PlaylistInsightsPageComponent } from './pi-components/playlist-insights-page/playlist-insights-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default page
  { path: 'spotifyPlaylistInsights', component: PlaylistInsightsPageComponent },
  { path: '**', redirectTo: '' }, // Redirect to default page
  // { path: 'playlistInsights/:playlist_id', component: PlaylistInsightsComponent }, 
  // { path: 'urlPlaylistInsights', component: UrlPlaylistInsightsComponent }, 
];