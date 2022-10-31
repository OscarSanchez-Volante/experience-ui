import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TableAdminuserComponent } from './table-adminuser.component';

describe('TableAdminuserComponent', () => {
  let component: TableAdminuserComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [TableAdminuserComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(TableAdminuserComponent);
    fixture = TestBed.createComponent(TableAdminuserComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(TableAdminuserComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
