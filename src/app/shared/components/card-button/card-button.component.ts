import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-button',
  imports: [],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {

  label = input();

}
