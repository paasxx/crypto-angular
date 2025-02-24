import { StandardCandle } from "../../../models/standard-candle.model";
import { MercadoBitcoinCandleResponse } from "../../../models/mercado-bitcoin-response.model";
import { ExchangeAdapter } from "./exchange-adapter.interface";
import { HttpParams } from "@angular/common/http";

export class MercadoBitcoinAdapter implements ExchangeAdapter<MercadoBitcoinCandleResponse> {

    //Converte os parâmetros padrão para o formato do Mercado Bitcoin
    adaptParams(
        symbol: string, 
        resolution: string, 
        from: number, 
        to: number, 
        countback?: number
    ): HttpParams{
        let params = new HttpParams()
        .set('symbol', symbol)
        .set('resolution', resolution)
        .set('from', from.toString())
        .set('to', to.toString());

        if (countback) {
            params = params.set('countback', countback.toString());
        }

        return params;
    }

    toStandard(response: MercadoBitcoinCandleResponse): StandardCandle[] {

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