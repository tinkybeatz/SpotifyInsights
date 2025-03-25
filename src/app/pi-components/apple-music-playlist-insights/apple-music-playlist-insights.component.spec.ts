import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleMusicPlaylistInsightsComponent } from './apple-music-playlist-insights.component';

describe('AppleMusicPlaylistInsightsComponent', () => {
  let component: AppleMusicPlaylistInsightsComponent;
  let fixture: ComponentFixture<AppleMusicPlaylistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleMusicPlaylistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleMusicPlaylistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
