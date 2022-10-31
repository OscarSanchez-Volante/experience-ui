import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [SidebarComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SidebarComponent);
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SidebarComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));


it("should check button enabled", () => {
  const fixture = TestBed.createComponent(SidebarComponent);
  fixture.detectChanges();
  const button = fixture.debugElement.query(By.css("button"));
  expect(button.nativeElement.disabled).toBeFalsy();
});
it('should render title in bt-lg-login class', async(() => {
  const fixture = TestBed.createComponent(SidebarComponent);
  fixture.detectChanges();
  const el=fixture.debugElement.query(By.css('.bt-lg-login')).nativeElement;
  expect(el.textContent).toContain('Back');
}));
it('should render title in bt-lg-submit class', async(() => {
  const fixture = TestBed.createComponent(SidebarComponent);
  fixture.detectChanges();
  const el=fixture.debugElement.query(By.css('.bt-lg-submit')).nativeElement;
  expect(el.textContent).toContain('Submit');
}));

});
