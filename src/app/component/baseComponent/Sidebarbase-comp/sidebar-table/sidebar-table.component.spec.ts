import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTableComponent } from './sidebar-table.component';

describe('SidebarTableComponent', () => {
  let component: SidebarTableComponent;
  let fixture: ComponentFixture<SidebarTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
