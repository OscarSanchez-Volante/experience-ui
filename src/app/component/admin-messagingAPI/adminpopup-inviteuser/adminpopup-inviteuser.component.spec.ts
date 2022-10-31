import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminpopupInviteuserComponent } from './adminpopup-inviteuser.component';

describe('AdminpopupInviteuserComponent', () => {
  let component: AdminpopupInviteuserComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [AdminpopupInviteuserComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
      fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
    fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.modal-title')).nativeElement;
    expect(el.textContent).toContain('Invite User');
  }));
  
  it("should check button enabled", () => {
    const fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
  it('should render title in bt-lg-can class', async(() => {
    const fixture = TestBed.createComponent(AdminpopupInviteuserComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.bt-lg-can')).nativeElement;
    expect(el.textContent).toContain('CANCEL');
    const accountBtn =fixture.debugElement.query(By.css('.bt-lg')).nativeElement;
    expect(accountBtn.textContent).toContain('SAVE');
  }));
});
