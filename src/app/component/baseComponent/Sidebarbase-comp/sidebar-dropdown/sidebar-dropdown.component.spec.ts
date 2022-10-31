import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidebarDropdownComponent } from './sidebar-dropdown.component';

describe('SidebarDropdownComponent', () => {
  let component: SidebarDropdownComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       HttpClientTestingModule,
       BrowserModule,
       RouterTestingModule.withRoutes([]),
     ],
     declarations: [SidebarDropdownComponent],
   }).compileComponents()
 
   let fixture = TestBed.createComponent(SidebarDropdownComponent);
     fixture = TestBed.createComponent(SidebarDropdownComponent);
     component = fixture.componentInstance;
     component.ngOnInit();
   
 }))

 it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SidebarDropdownComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));
});
