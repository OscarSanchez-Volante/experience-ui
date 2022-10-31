import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PartThreeComponent } from './partThree.component';
describe('PartThreeComponent', () => {
  let component: PartThreeComponent;
  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [PartThreeComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(PartThreeComponent);
    fixture = TestBed.createComponent(PartThreeComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  
}))

it('should create the app', async(() => {
  const fixture = TestBed.createComponent(PartThreeComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy(); 
}));
});
