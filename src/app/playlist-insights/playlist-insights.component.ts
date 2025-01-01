import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-insights',
  standalone: true,
  templateUrl: './playlist-insights.component.html',
})
export class PlaylistInsightsComponent {
  constructor() {}

  ngOnInit(): void {}

  submit() {
    // https://open.spotify.com/playlist/3aI8mappd9DyYvgIkDWy7y?si=c6d807c5eed64387
    const formInputUrl = (document.getElementById('input') as HTMLInputElement)
      .value;
    const playlist_id = formInputUrl.split('playlist/')[1].split('?')[0];
    console.log(playlist_id);
  }
}

// import { Component } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-playlist-insights',
//   standalone: true,
//   templateUrl: './playlist-insights.component.html',
//   imports: [HttpClientModule], // Import HttpClientModule here
// })
// export class PlaylistInsightsComponent {
//   constructor(private http: HttpClient) {}

//   submit() {
//     const formInputUrl = (document.getElementById('input') as HTMLInputElement)
//       .value;
//     const playlist_id = formInputUrl.split('playlist/')[1].split('?')[0];
//     console.log(playlist_id);
//     this.http
//       .get<any>(`https://api.spotify.com/v1/playlists/${playlist_id}`)
//       .subscribe((data: any) => {
//         console.log(data);
//       });
//   }
// }