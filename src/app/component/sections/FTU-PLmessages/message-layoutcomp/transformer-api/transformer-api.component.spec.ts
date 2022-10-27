import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TransformerAPIComponent } from './transformer-api.component';
describe('TransformerAPIComponent', () => {
  let component: TransformerAPIComponent;
  let mockAuthService: jasmine.SpyObj<any>;
 let router: Router;
 beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserModule,
      RouterTestingModule.withRoutes([]),
    ],
    declarations: [TransformerAPIComponent],
  }).compileComponents()

  let fixture = TestBed.createComponent(TransformerAPIComponent);
    fixture = TestBed.createComponent(TransformerAPIComponent);
    component = fixture.componentInstance; 
    component.ngOnInit();
  
}))
 
it('should create the app', async(() => {
  const fixture = TestBed.createComponent(TransformerAPIComponent);
  const app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
}));
it('should render title as Messaging APIs ', async(() => {
  const fixture = TestBed.createComponent(TransformerAPIComponent);
  fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.Payment')).nativeElement;
  expect(el.textContent).toContain('Messaging APIs');
}));
it('should render description', async(() => {
  const fixture = TestBed.createComponent(TransformerAPIComponent);
  fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.Select')).nativeElement;
  expect(el.textContent).toContain('Select and configure the transformers that your institution would like to review and evaluaite ont he Volante VolPay service. You only need to configure one rail to get started, and can configure additional rails later as needed.');
}));

});
