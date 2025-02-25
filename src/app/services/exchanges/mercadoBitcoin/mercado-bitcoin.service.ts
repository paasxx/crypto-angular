import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MercadoBitcoinCandleAdapter} from '../adapters/mercado-bitcoin-candle-adapter';
import { MercadoBitcoinSymbolAdapter } from '../adapters/mercado-bitcoin-symbol-adapter';
import { StandardCandle } from '../../../models/standard-candle-response.model';
import { MercadoBitcoinCandleResponse } from '../../../models/mercado-bitcoin/mercado-bitcoin-candles-response.model';
import { StandardSymbol } from '../../../models/standard-symbol-response.model';
import { MercadoBitcoinSymbolsResponse } from '../../../models/mercado-bitcoin/mercado-bitcoin-symbols-response.model';


@Injectable({
  providedIn: 'root'
})
export class MercadoBitcoinService {
  private candlesUrl: string = 'https://api.mercadobitcoin.net/api/v4/candles';
  private symbolsUrl = 'https://api.mercadobitcoin.net/api/v4/symbols';
  private candleAdapter = new MercadoBitcoinCandleAdapter();
  private symbolAdapter = new MercadoBitcoinSymbolAdapter();


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

      const params = this.candleAdapter.adaptParams(symbol,resolution, from, to, countback);

      return this.http.get<MercadoBitcoinCandleResponse>(this.candlesUrl, { params }).pipe(
        map(response => this.candleAdapter.toStandard(response))
      )
    }

    getSymbolsList(): Observable<StandardSymbol[]>{

      const params = {};

      return this.http.get<MercadoBitcoinSymbolsResponse>(this.symbolsUrl, { params }).pipe(
        map(response => this.symbolAdapter.toStandard(response))
      )

    };
  }

