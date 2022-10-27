import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PopupInviteusersandboxComponent } from './popup-inviteusersandbox.component';

describe('PopupInviteusersandboxComponent', () => {
  let component: PopupInviteusersandboxComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [PopupInviteusersandboxComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
      fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.modal-title')).nativeElement;
    expect(el.textContent).toContain('Invite User');
  }));
  
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title in bt-lg-can class', async(() => {
    const fixture = TestBed.createComponent(PopupInviteusersandboxComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-can')).nativeElement;
    expect(el.textContent).toContain('CANCEL');
    const accountBtn =fixture.debugElement.query(By.css('.bt-lg')).nativeElement;
    expect(accountBtn.textContent).toContain('SAVE');
  }));
});
