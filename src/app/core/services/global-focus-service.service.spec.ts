import { TestBed, inject } from '@angular/core/testing';

import { GlobalFocusServiceService } from './global-focus-service.service';

describe('GlobalFocusServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalFocusServiceService]
    });
  });

  it('should be created', inject([GlobalFocusServiceService], (service: GlobalFocusServiceService) => {
    expect(service).toBeTruthy();
  }));
});
