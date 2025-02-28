export interface MercadoBitcoinSymbolsResponse { 
  ["base-currency"]: string[];
  ["currency"]: string[];
  ["deposit-minimum"]: number[];
  ["description"]: string[];
  ["exchange-listed"]: boolean[];
  ["exchange-traded"]: boolean[];
  ["minmovement"]: number[];
  ["pricescale"]: number[];
  ["session-regular"]: string[];
  ["symbol"]: string[];
  ["timezone"]: string[];
  ["type"]: string[];
  ["withdraw-minimum"]: number[];
  ["withdrawal-fee"]: number[];
}