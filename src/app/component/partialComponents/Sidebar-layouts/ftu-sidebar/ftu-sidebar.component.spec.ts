import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtuSidebarComponent } from './ftu-sidebar.component';

describe('FtuSidebarComponent', () => {
  let component: FtuSidebarComponent;
  let fixture: ComponentFixture<FtuSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtuSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtuSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
