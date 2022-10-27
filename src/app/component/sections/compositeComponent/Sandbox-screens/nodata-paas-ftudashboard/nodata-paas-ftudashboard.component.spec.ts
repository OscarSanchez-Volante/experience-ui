import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodataPaasFtudashboardComponent } from './nodata-paas-ftudashboard.component';

describe('NodataPaasFtudashboardComponent', () => {
  let component: NodataPaasFtudashboardComponent;
  let fixture: ComponentFixture<NodataPaasFtudashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodataPaasFtudashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodataPaasFtudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
