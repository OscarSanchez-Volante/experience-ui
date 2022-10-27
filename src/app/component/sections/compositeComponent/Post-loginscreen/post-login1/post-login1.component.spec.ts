import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLogin1Component } from './post-login1.component';

describe('PostLogin1Component', () => {
  let component: PostLogin1Component;
  let fixture: ComponentFixture<PostLogin1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLogin1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
