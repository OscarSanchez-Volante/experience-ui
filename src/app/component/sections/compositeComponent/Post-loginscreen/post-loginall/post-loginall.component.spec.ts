import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginallComponent } from './post-loginall.component';

describe('PostLoginallComponent', () => {
  let component: PostLoginallComponent;
  let fixture: ComponentFixture<PostLoginallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
