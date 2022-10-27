import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PostLoginFtuComponent } from './post-login-ftu.component';

describe('PostLoginFtuComponent', () => {
  let component: PostLoginFtuComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [PostLoginFtuComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(PostLoginFtuComponent);
      fixture = TestBed.createComponent(PostLoginFtuComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(PostLoginFtuComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
  
});
