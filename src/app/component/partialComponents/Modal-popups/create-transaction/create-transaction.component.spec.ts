import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CreateTransactionComponent } from './create-transaction.component';

describe('CreateTransactionComponent', () => {
  let component: CreateTransactionComponent;
  let fixture: ComponentFixture<CreateTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render  title tag as Create Transaction', async(() => {
    // fetch debug element
    let h1El = fixture.debugElement.query(By.css('.modal-title'));
    expect(h1El.nativeElement.textContent).toContain('Create Transaction');
    }));    
  

     it('should render title tag Download Sample CSV ', async(() => {
      const fixture = TestBed.createComponent(CreateTransactionComponent);
      fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.but-lg')).nativeElement;
      expect(el.textContent).toContain('Download Sample CSV');
    }));
    
    it('should render title tag CANCEL ', async(() => {
      const fixture = TestBed.createComponent(CreateTransactionComponent);
      fixture.detectChanges();
      const el=fixture.debugElement.query(By.css('.but-lg-can')).nativeElement;
      expect(el.textContent).toContain('CANCEL');
    }));
  
  it("should check button enabled", () => {
      const fixture = TestBed.createComponent(CreateTransactionComponent);
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css("button"));
      expect(button.nativeElement.disabled).toBeFalsy();
    });
});
