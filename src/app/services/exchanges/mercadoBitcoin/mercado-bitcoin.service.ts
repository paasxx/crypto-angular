import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MercadoBitcoinAdapter } from '../adapters/mercado-bitcoin-adapter';
import { StandardCandle } from '../../../models/standard-candle.model';
import { MercadoBitcoinCandleResponse } from '../../../models/mercado-bitcoin-response.model';


@Injectable({
  providedIn: 'root'
})
export class MercadoBitcoinService {
  private baseUrl: string = 'https://api.mercadobitcoin.net/api/v4/candles';
  private adapter = new MercadoBitcoinAdapter();

  constructor(private http: HttpClient) { 

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

    ) : Observable<StandardCandle[]> {

      const params = this.adapter.adaptParams(symbol,resolution, from, to, countback);

      return this.http.get<MercadoBitcoinCandleResponse>(this.baseUrl, { params }).pipe(
        map(response => this.adapter.toStandard(response))
      )
    }
  }

