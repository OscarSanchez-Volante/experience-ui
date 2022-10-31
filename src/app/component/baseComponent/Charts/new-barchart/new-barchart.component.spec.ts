import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBarchartComponent } from './new-barchart.component';

describe('NewBarchartComponent', () => {
  let component: NewBarchartComponent;
  let fixture: ComponentFixture<NewBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
