import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudPlaylistInsightsComponent } from './soundcloud-playlist-insights.component';

describe('SoundcloudPlaylistInsightsComponent', () => {
  let component: SoundcloudPlaylistInsightsComponent;
  let fixture: ComponentFixture<SoundcloudPlaylistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundcloudPlaylistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundcloudPlaylistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
