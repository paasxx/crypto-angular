import { StandardSymbol } from './../../models/standard-symbol-response.model';
import { CryptoDataService } from './../../services/exchanges/crypto-data.service';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardCryptoComponent } from "../../shared/components/card-crypto/card-crypto.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardCryptoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  CryptoDataService = inject(CryptoDataService);

  exchange: string = 'mercadoBitcoin'

  symbolData$: Observable<StandardSymbol[]>  = this.CryptoDataService.getSymbols(this.exchange);
  
  

}
