import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewSidebarComponent } from './new-sidebar.component';

describe('NewSidebarComponent', () => {
  let component: NewSidebarComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [NewSidebarComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(NewSidebarComponent);
      fixture = TestBed.createComponent(NewSidebarComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(NewSidebarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
});
