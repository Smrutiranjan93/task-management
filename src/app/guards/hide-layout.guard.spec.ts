import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hideLayoutGuard } from './hide-layout.guard';

describe('hideLayoutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hideLayoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
