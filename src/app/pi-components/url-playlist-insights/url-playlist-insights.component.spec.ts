// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UrlPlaylistInsightsComponent } from './url-playlist-insights.component';

// describe('UrlPlaylistInsightsComponent', () => {
//   let component: UrlPlaylistInsightsComponent;
//   let fixture: ComponentFixture<UrlPlaylistInsightsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [UrlPlaylistInsightsComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UrlPlaylistInsightsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPlaylistInsightsComponent } from './url-playlist-insights.component';

describe('UrlPlaylistInsightsComponent', () => {
  let component: UrlPlaylistInsightsComponent;
  let fixture: ComponentFixture<UrlPlaylistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlPlaylistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlPlaylistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
