// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
// })

// export class AppComponent {
// }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { track } from '@vercel/analytics';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Track page view
        track('pageview', { path: event.urlAfterRedirects });
      }
    });
  }
}