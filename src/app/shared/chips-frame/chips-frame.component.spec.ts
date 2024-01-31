import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsFrameComponent } from './chips-frame.component';

describe('ChipsFrameComponent', () => {
  let component: ChipsFrameComponent;
  let fixture: ComponentFixture<ChipsFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipsFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipsFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
