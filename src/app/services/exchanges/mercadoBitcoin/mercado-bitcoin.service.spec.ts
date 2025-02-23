import { TestBed } from '@angular/core/testing';

import { MercadoBitcoinService } from './mercado-bitcoin.service';

describe('MercadoBitcoinService', () => {
  let service: MercadoBitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercadoBitcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
