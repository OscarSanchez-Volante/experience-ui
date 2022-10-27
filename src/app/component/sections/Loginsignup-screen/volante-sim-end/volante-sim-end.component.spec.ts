import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolanteSimEndComponent } from './volante-sim-end.component';

describe('VolanteSimEndComponent', () => {
  let component: VolanteSimEndComponent;
  let fixture: ComponentFixture<VolanteSimEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolanteSimEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolanteSimEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
