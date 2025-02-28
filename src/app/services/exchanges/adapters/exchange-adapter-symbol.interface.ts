import { StandardSymbol } from "../../../models/standard-symbol-response.model";

export interface ExchangeSymbolAdapter<T> {
    toStandard(response:T): StandardSymbol[];

}



