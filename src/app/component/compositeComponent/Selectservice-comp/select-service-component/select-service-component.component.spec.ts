import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SelectServiceComponentComponent } from './select-service-component.component';

describe('SelectServiceComponentComponent', () => {
  let component: SelectServiceComponentComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [SelectServiceComponentComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SelectServiceComponentComponent);
    fixture = TestBed.createComponent(SelectServiceComponentComponent);
    component = fixture.componentInstance; 
    component.ngOnInit();
  
}))
  
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SelectServiceComponentComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));

});
