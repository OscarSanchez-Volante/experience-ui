import { TestBed } from '@angular/core/testing';

import { JsonHttpService } from './json-http.service';

describe('JsonHttpService', () => {
  let service: JsonHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
