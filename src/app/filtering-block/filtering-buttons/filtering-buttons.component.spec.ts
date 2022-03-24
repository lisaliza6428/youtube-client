import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringButtonsComponent } from './filtering-buttons.component';

describe('FilteringButtonsComponent', () => {
  let component: FilteringButtonsComponent;
  let fixture: ComponentFixture<FilteringButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
