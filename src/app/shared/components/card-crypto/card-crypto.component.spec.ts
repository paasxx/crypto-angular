import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCryptoComponent } from './card-crypto.component';

describe('CardCryptoComponent', () => {
  let component: CardCryptoComponent;
  let fixture: ComponentFixture<CardCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCryptoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
