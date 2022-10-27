import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackBarchartComponent } from './stack-barchart.component';

describe('StackBarchartComponent', () => {
  let component: StackBarchartComponent;
  let fixture: ComponentFixture<StackBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
