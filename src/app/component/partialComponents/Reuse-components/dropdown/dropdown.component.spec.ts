import { async, ComponentFixture, TestBed , fakeAsync} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should pass the id value of one from main component', async(() => {
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.form-select')).nativeElement;
    select.value = select.id[1];  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }));
  it('should pass the id value of two from main component', async(() => {
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.form-select')).nativeElement;
    select.value = select.id[2];  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }));
  it('should pass the id value of three from main component', async(() => {
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.form-select')).nativeElement;
    select.value = select.id[3];  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  })); 
});
