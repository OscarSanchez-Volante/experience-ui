import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldMapchartComponent } from './world-mapchart.component';

describe('WorldMapchartComponent', () => {
  let component: WorldMapchartComponent;
  let fixture: ComponentFixture<WorldMapchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldMapchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldMapchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
