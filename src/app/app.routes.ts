import { Routes } from '@angular/router';
import { PlaylistInsightsComponent } from './playlist-insights/playlist-insights.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Default page
  { path: 'playlistInsights', component: PlaylistInsightsComponent }, // New page
];