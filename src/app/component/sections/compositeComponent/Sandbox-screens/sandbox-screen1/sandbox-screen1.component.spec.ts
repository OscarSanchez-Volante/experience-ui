import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SandboxScreen1Component } from './sandbox-screen1.component';

describe('SandboxScreen1Component', () => {
  let component: SandboxScreen1Component;
  let fixture: ComponentFixture<SandboxScreen1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxScreen1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxScreen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title as Sandbox Transactions', async(() => {
    // fetch debug element
    let h1El = fixture.debugElement.query(By.css('.sandbox'));
    expect(h1El.nativeElement.textContent).toContain(' Sandbox Transactions');
    }));
    it(' New Simulated Transaction button should work on Click', async(() => {
      fixture.detectChanges();
      let buttonElement = fixture.debugElement.query(By.css('.dropdown-toggle'));
      let Login = fixture.debugElement.nativeElement.querySelector('New Simulated Transaction');
     }));
     
});
