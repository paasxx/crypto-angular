import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BinanceAdapter } from '../adapters/binance-adapter';
import { StandardCandle } from '../../../models/standard-candle-response.model';
import { BinanceCandleResponse } from '../../../models/binance/binance-response.model';

@Injectable({
  providedIn: 'root'
})
export class BinanceService {
  private baseUrl: string = 'https://api.binance.com/api/v3/klines';
  private adapter = new BinanceAdapter();

  constructor(private http: HttpClient) { }

  getCryptoCandles(
    symbol: string,
    resolution: string,
    from: number,
    to: number,
    countback?: number
  ): Observable<StandardCandle[]> {

    const params = this.adapter.adaptParams(symbol, resolution, from, to, countback);

    return this.http.get<BinanceCandleResponse>(this.baseUrl, { params }).pipe(
      map(response => this.adapter.toStandard(response))
    );
  }
}
