import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InviteUserscreenComponent } from './invite-userscreen.component';

describe('InviteUserscreenComponent', () => {
  let component: InviteUserscreenComponent;
  // let fixture: ComponentFixture<InviteUserscreenComponent>;

  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [InviteUserscreenComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(InviteUserscreenComponent);
      fixture = TestBed.createComponent(InviteUserscreenComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  

});
