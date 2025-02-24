import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { CryptoDataService } from '../../services/exchanges/crypto-data.service';
import { StandardCandle } from '../../models/standard-candle.model';

@Component({
  selector: 'app-crypto-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './crypto-list.component.html',
  styleUrl: './crypto-list.component.scss'
})
export class CryptoListComponent {

  cryptoData$: Observable<StandardCandle[]> | undefined;

  cryptoDataService = inject(CryptoDataService); // ✅ Injeção usando `inject()`

  constructor() {}

  // Exemplo: buscando dados para o BTC-BRL com resolução de 1 hora

  exchange: string = 'mercadoBitcoin';
  symbol: string = 'ETH-BRL';
  resolution: string = '1h';
  from: number = this.getMidnightTimestampUTC(1);
  to: number = this.getMidnightTimestampUTC(0);
  countback: number = 10;

  fromDate: string = this.formatDateUTC(this.from);
  toDate: string = this.formatDateUTC(this.to);

  symbols: string[] = ['BTC-BRL', 'ETH-BRL', 'DOGE-BRL', 'ADA-BRL'];
  resolutions: string[] = ['1m', '15m', '1h', '3h', '1d', '1w', '1M'];

  ngOnInit() {
    this.loadCryptoData();
  }

  private getMidnightTimestampUTC(daysAgo: number = 0): number {
    if (daysAgo == 0){

      const date = new Date();
      date.setUTCDate(date.getUTCDate() - daysAgo);
      return Math.floor(date.getTime() / 1000);

    }
    else {
      const date = new Date();
      date.setUTCDate(date.getUTCDate() - daysAgo);
      date.setUTCHours(0, 0, 0, 0);
      return Math.floor(date.getTime() / 1000);
    };
    
  }

  private formatDateUTC(timestamp: number): string {
    return new Date(timestamp * 1000).toISOString().split('T')[0];
  }

  updateTimestamp(type: 'from' | 'to') {

    if (type =='from'){

    console.log(`Antes da conversão: ${type}Date =`, this[`${type}Date`]);
    const date = new Date(this[`${type}Date`]);
    this[type] = Math.floor(date.getTime() / 1000);
    console.log(`Depois da conversão: ${type} =`, this[type]);
    }
    else {
      console.log(`Antes da conversão: ${type}Date =`, this[`${type}Date`]);
      const date = new Date(this[`${type}Date`]);
      this[type] = Math.floor(date.getTime() / 1000);
      console.log(`Depois da conversão: ${type} =`, this[type]);

    };
    
  }

  loadCryptoData() {

    console.log("==== Parâmetros enviados para a API ====");
    console.log("Símbolo:", this.symbol);
    console.log("Resolução:", this.resolution);
    console.log("Countback:", this.countback);
    console.log("From Date:", this.fromDate, "=> Timestamp:", this.from);
    console.log("To Date:", this.toDate, "=> Timestamp:", this.to);

    this.cryptoData$ = this.cryptoDataService.getCandles(
    this.exchange,
    this.symbol,
    this.resolution,
    this.from,
    this.to,
    this.countback
    );
  }
}



