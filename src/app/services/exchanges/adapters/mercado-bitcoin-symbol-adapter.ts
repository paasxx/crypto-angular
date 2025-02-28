
import { ExchangeSymbolAdapter } from "./exchange-adapter-symbol.interface";
import { StandardSymbol } from "../../../models/standard-symbol-response.model";
import { MercadoBitcoinSymbolsResponse } from "../../../models/mercado-bitcoin/mercado-bitcoin-symbols-response.model";

export class MercadoBitcoinSymbolAdapter implements ExchangeSymbolAdapter<MercadoBitcoinSymbolsResponse> {
 
    toStandard(response: MercadoBitcoinSymbolsResponse): StandardSymbol[] {
        console.log(response);

        return response["base-currency"].map((item, index) => ({
            baseCurrency: item,
            symbol: response["symbol"][index],
            type: response["type"][index],
        
    
        }));
    }
}
