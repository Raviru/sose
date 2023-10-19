import { TestBed } from '@angular/core/testing';

import { ConfrimationDialogService } from './confrimation-dialog.service';

describe('ConfrimationDialogServiceService', () => {
  let service: ConfrimationDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfrimationDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
