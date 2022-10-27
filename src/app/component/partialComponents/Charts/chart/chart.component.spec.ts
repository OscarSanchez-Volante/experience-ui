import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;

  let mockAuthService: jasmine.SpyObj<any>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ChartComponent],
    }).compileComponents()
  
    let fixture = TestBed.createComponent(ChartComponent);
      fixture = TestBed.createComponent(ChartComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
    
  }))
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChartComponent );
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); 
  }));
});
