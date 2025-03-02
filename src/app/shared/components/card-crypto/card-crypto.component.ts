import { Component, input } from '@angular/core';
import { StandardSymbol } from '../../../models/standard-symbol-response.model';
import { CardButtonComponent } from "../card-button/card-button.component";

@Component({
  selector: 'app-card-crypto',
  imports: [CardButtonComponent],
  templateUrl: './card-crypto.component.html',
  styleUrl: './card-crypto.component.scss'
})
export class CardCryptoComponent {

  crypto = input.required<StandardSymbol>();
  label = "Abrir";

}
