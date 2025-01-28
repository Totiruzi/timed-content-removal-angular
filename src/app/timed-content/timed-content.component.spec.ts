import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedContentComponent } from './timed-content.component';

describe('TimedContentComponent', () => {
  let component: TimedContentComponent;
  let fixture: ComponentFixture<TimedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
