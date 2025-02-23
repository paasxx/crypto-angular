export interface ApiCandleResponse {
  t: number[];
  o: string[];
  h: string[];
  l: string[];
  c: string[];
  v: string[];
}

export interface Candle {
  t: Date;
  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
}