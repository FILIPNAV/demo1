import { TestBed } from '@angular/core/testing';

import { PrehledService } from './prehled.service';

describe('PrehledService', () => {
  let service: PrehledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrehledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
