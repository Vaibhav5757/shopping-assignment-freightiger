import { TestBed } from '@angular/core/testing';

import { RandomPersonService } from './random-person.service';

describe('RandomPersonService', () => {
  let service: RandomPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
