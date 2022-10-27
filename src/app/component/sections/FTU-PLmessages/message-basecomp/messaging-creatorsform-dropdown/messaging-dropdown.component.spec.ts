import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessagingDropdownComponent } from './messaging-dropdown.component';

describe('MessagingDropdownComponent', () => {
  let component: MessagingDropdownComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [MessagingDropdownComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(MessagingDropdownComponent);
     fixture = TestBed.createComponent(MessagingDropdownComponent);
     component = fixture.componentInstance; 
     component.ngOnInit();
   
 }))
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MessagingDropdownComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title as Message Transformers ', async(() => {
   const fixture = TestBed.createComponent(MessagingDropdownComponent);
   fixture.detectChanges();
     const el=fixture.debugElement.query(By.css('.Payment')).nativeElement;
   expect(el.textContent).toContain('');
 }));
 it('should render description', async(() => {
   const fixture = TestBed.createComponent(MessagingDropdownComponent);
   fixture.detectChanges();MessagingDropdownComponent
     const el=fixture.debugElement.query(By.css('.Select')).nativeElement;
   expect(el.textContent).toContain('Select and configure the transformers that your institution would like to review and evaluaite ont he Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed.');
 }));
});
