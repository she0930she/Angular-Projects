import { TestBed } from '@angular/core/testing';

import { LoginSerivceService } from './login-serivce.service';

describe('LoginSerivceService', () => {
  let service: LoginSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
