import { TestBed } from '@angular/core/testing';

import { CarouselSmallcardServiceService } from './carousel-smallcard.service';

describe('CarouselSmallcardService', () => {
  let service: CarouselSmallcardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselSmallcardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
