import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { SelectServiceComponent } from './select-service.component';

describe('SelectServiceComponent', () => {
  let component: SelectServiceComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
    ],
    declarations: [SelectServiceComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(SelectServiceComponent);
    fixture = TestBed.createComponent(SelectServiceComponent);
    component = fixture.componentInstance; 
    component.ngOnInit();
  
}))
  
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(SelectServiceComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));
});
