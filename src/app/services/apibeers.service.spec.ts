import { TestBed } from '@angular/core/testing';

import { ApibeersService } from './apibeers.service';

describe('ApibeersService', () => {
  let service: ApibeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApibeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
