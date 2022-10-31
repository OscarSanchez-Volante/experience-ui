import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MessagesetupSidebarComponent } from './messagesetup-sidebar.component';

describe('MessagesetupSidebarComponent', () => {
  let component: MessagesetupSidebarComponent;
  let fixture: ComponentFixture<MessagesetupSidebarComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ MessagesetupSidebarComponent ]
    })
    .compileComponents()
    let fixture = TestBed.createComponent(MessagesetupSidebarComponent);
    fixture = TestBed.createComponent(MessagesetupSidebarComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  }))

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
