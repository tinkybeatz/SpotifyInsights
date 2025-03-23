import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeezerPlaylistInsightsComponent } from './deezer-playlist-insights.component';

describe('DeezerPlaylistInsightsComponent', () => {
  let component: DeezerPlaylistInsightsComponent;
  let fixture: ComponentFixture<DeezerPlaylistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeezerPlaylistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeezerPlaylistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
