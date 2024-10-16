import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureViewerComponent } from './brochure-viewer.component';

describe('BrochureViewerComponent', () => {
  let component: BrochureViewerComponent;
  let fixture: ComponentFixture<BrochureViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrochureViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrochureViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
