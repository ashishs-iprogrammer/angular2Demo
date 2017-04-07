import { TestBed, inject } from '@angular/core/testing';

import { JobinfoService } from './jobinfo.service';

describe('JobinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobinfoService]
    });
  });

  it('should ...', inject([JobinfoService], (service: JobinfoService) => {
    expect(service).toBeTruthy();
  }));
});
