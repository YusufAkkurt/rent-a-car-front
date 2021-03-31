import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardService } from '../../../services/card.service';
import { Card } from '../../../models/entities/card';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Customer } from '../../../models/entities/customer';

@Component({
   selector: 'app-card-saved',
   templateUrl: './card-saved.component.html',
   styleUrls: ['./card-saved.component.css']
})

export class CardSavedComponent implements OnInit {

   cards: Card[];
   currentCustomer: Customer;
   @Output() selectedCard: EventEmitter<Card> = new EventEmitter<Card>();

   constructor(private cardService: CardService,
               private localStorageService: LocalStorageService) {
   }

   ngOnInit(): void {
      this.currentCustomer = Object.assign({}, this.localStorageService.getCurrentCustomer());
      this.getCardsByCustomerId(this.currentCustomer.id);
   }

   getCardsByCustomerId(customerId: number) {
      this.cardService.getByCustomerId(customerId).subscribe(response => {
         this.cards = response.data;
      });
   }

   selectCard(cardId: number) {
      let selectedCard = this.cards.find(card => card.id == cardId);

      // @ts-ignore
      let newSelectedCard: Card = {
         cardNameSurname: selectedCard.cardNameSurname,
         cardNumber: selectedCard.cardNumber,
         validDate: selectedCard.validDate,
         customerId: selectedCard.customerId,
         cvv: selectedCard.cvv
      };

      this.selectedCard.emit(newSelectedCard);
   }
}
