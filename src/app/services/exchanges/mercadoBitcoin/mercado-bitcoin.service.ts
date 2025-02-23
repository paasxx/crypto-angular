import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { map,Observable } from 'rxjs';
import { ApiCandleResponse, Candle } from '../../../models/mercadoBitcoinResponse';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercadoBitcoinService extends BaseApiService {

  private baseUrl: string = 'https://api.mercadobitcoin.net/api/v4/candles';
  

  constructor(http: HttpClient) { 

    super(http);
  }

     /**
   * Método para obter os dados de candles das criptomoedas
   * @param symbol O símbolo da criptomoeda no formato BASE-QUOTE (ex: BTC-BRL)
   * @param resolution A resolução (1m, 15m, 1h, 1d, etc.)
   * @param from O timestamp de início para o intervalo de dados
   * @param to O timestamp de fim para o intervalo de dados
   * @param countback O número de barras (se definido, `from` será ignorado)
   */
  
     getCryptoCandles(

      symbol: string,
      resolution: string,
      from: number,
      to: number,
      countback?: number

    ) : Observable<Candle[]> {

      let params = new HttpParams()
      .set('symbol', symbol)
      .set('resolution', resolution)
      .set('from', from.toString())
      .set('to', to.toString());

      if(countback){

        params = params.set('countback', countback.toString());
      };

      return this.http.get<ApiCandleResponse>(this.baseUrl, { params }).pipe(
        map(data =>
          data.t.map((timestamp, index) => ({
            t: new Date(timestamp * 1000),  // Convertendo UNIX timestamp para `Date`
            o: parseFloat(data.o[index]),  // Convertendo string para número
            h: parseFloat(data.h[index]),
            l: parseFloat(data.l[index]),
            c: parseFloat(data.c[index]),
            v: parseFloat(data.v[index]),
          }))
        )
      );
    }
  }

