import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxNodatascreenComponent } from './sandbox-nodatascreen.component';

describe('SandboxNodatascreenComponent', () => {
  let component: SandboxNodatascreenComponent;
  let fixture: ComponentFixture<SandboxNodatascreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxNodatascreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxNodatascreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
