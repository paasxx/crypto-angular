import { BinanceService } from './binance/binance.service';
import { Injectable } from '@angular/core';
import { MercadoBitcoinService } from './mercadoBitcoin/mercado-bitcoin.service';
import { StandardCandle } from '../../models/standard-candle-response.model';
import { Observable } from 'rxjs';
import { StandardSymbol } from '../../models/standard-symbol-response.model';

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

   getSymbols(exchange: string):Observable<StandardSymbol[]>{

    switch (exchange){
      case 'mercadoBitcoin':
        return this.mercadoBitcoinService.getSymbolsList();
      case 'binance':
        return this.mercadoBitcoinService.getSymbolsList();
        // return this.binanceService.getSymbolsList(); *** CORRETO ****
      default:
        throw new Error('Exchange não suportada');
    }

   };
  }
