import { HttpParams } from '@angular/common/http';
import { StandardCandle } from '../../../models/standard-candle.model';
import { ExchangeAdapter } from './exchange-adapter.interface';
import { BinanceCandleResponse } from '../../../models/binance-response.model';

export class BinanceAdapter implements ExchangeAdapter<BinanceCandleResponse> {

  // Adapta parâmetros gen´ricos para o formato da Binance
  adaptParams(
    symbol: string,
    resolution: string,
    from: number,
    to: number,
    countback?: number) : HttpParams {
        let params = new HttpParams()
        .set('symbol', symbol)
        .set('interval', resolution)
        .set('startTime', (from*1000).toString())
        .set('endTime', (to*1000).toString());

        if (countback){
            params = params.set('limit', countback.toString());
        }
        return params;
    }



  toStandard(response: BinanceCandleResponse): StandardCandle[] {
    return response.t.map((timestamp, index) => ({
        timestamp: new Date(timestamp*1000),
        open: parseFloat(response.o[index]),
        high: parseFloat(response.h[index]),
        low: parseFloat(response.l[index]),
        close: parseFloat(response.c[index]),
        volume: parseFloat(response.v[index]),
        

    }));
  }
}
