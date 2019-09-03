import { TestBed } from '@angular/core/testing';

import { SampleFormService } from './sample-form.service';

describe('SampleFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFormService = TestBed.get(SampleFormService);
    expect(service).toBeTruthy();
  });
});
