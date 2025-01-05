import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientBackgroundComponent } from './gradient-background.component';

describe('GradientBackgroundComponent', () => {
  let component: GradientBackgroundComponent;
  let fixture: ComponentFixture<GradientBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
