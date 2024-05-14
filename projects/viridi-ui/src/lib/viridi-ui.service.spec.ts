import { TestBed } from '@angular/core/testing';

import { ViridiUiService } from './viridi-ui.service';

describe('ViridiUiService', () => {
  let service: ViridiUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViridiUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
