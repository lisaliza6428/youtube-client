import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBlockComponent } from './results-block.component';

describe('ResultsBlockComponent', () => {
  let component: ResultsBlockComponent;
  let fixture: ComponentFixture<ResultsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
