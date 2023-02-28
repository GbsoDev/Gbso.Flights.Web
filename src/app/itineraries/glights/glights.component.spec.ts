import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlightsComponent } from './glights.component';

describe('GlightsComponent', () => {
  let component: GlightsComponent;
  let fixture: ComponentFixture<GlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
