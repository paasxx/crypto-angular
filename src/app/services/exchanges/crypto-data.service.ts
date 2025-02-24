import { BinanceService } from './binance/binance.service';
import { Injectable } from '@angular/core';
import { MercadoBitcoinService } from './mercadoBitcoin/mercado-bitcoin.service';
import { StandardCandle } from '../../models/standard-candle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  constructor(
    private mercadoBitcoinService: MercadoBitcoinService,
    private binanceService: BinanceService,
  ) { }

  getCandles(
    exchange: string, 
    symbol: string, 
    resolution: string,
    from: number,
    to: number,
    countback?: number
   ): Observable<StandardCandle[]>{

    switch (exchange){
      case 'mercadoBitcoin':
        return this.mercadoBitcoinService.getCryptoCandles(symbol, resolution, from, to, countback);
      case 'binance':
        return this.binanceService.getCryptoCandles(symbol, resolution, from, to, countback);
      default:
        throw new Error('Exchange não suportada');
    }
   }
}
