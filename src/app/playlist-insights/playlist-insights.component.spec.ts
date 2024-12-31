import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistInsightsComponent } from './playlist-insights.component';

describe('PlaylistInsightsComponent', () => {
  let component: PlaylistInsightsComponent;
  let fixture: ComponentFixture<PlaylistInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
