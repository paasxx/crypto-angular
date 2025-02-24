import { HttpParams } from "@angular/common/http";
import { StandardCandle } from "../../../models/standard-candle.model";

export interface ExchangeAdapter<T> {
    adaptParams(symbol: string, resolution: string, from: number, to: number, countback?: number): HttpParams;
    toStandard(response:T): StandardCandle[];
}
// good practice this any?