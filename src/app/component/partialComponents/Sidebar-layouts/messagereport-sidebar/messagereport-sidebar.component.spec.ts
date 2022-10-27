import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MessagereportSidebarComponent } from './messagereport-sidebar.component';

describe('MessagereportSidebarComponent', () => {
  let component: MessagereportSidebarComponent;
  let fixture: ComponentFixture<MessagereportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagereportSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagereportSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render  title tag as Sizing Info BAHTNET', async(() => {
    let h1El = fixture.debugElement.query(By.css('.modal-title'));
    expect(h1El.nativeElement.textContent).toContain('Sizing Info BAHTNET');
    }));
     
  it('should render title in .but-lg-can class', async(() => {
    const fixture = TestBed.createComponent(MessagereportSidebarComponent);
    fixture.detectChanges();
    const el=fixture.debugElement.query(By.css('.but-lg-can')).nativeElement;
    expect(el.textContent).toContain('CLOSE');
  }));
it("should check button enabled", () => {
    const fixture = TestBed.createComponent(MessagereportSidebarComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });
});
