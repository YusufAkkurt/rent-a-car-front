import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardService } from '../../services/card.service';
import { RentableCarService } from '../../services/rentable-car.service';
import { RentableCar } from '../../models/rentableCar';
import { RentalService } from '../../services/rental.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

   // @ts-ignore
   card: Card = {
      customerId: 1,
      cardNameSurname: '',
      cardNumber: '',
      validDate: '',
      cvv: ''
   };

   isSaved: boolean = true;

   constructor(private cardService: CardService,
               private rentalService: RentalService,
               private rentableCarService: RentableCarService,
               private router: Router,
               private toastrService: ToastrService) {
   }

   ngOnInit(): void {
      if (!this.getRentableCar()) {
         console.log('Kiralanacak araba bellekte bulunamadı');
      }
   }

   add() {
      if (!this.isSaved) {
         return console.log('Bilgiler kayıt edilmeycek');
      }

      this.cardService.add(this.card).subscribe(response => {
         if (!response.success) {
            this.toastrService.error(response.message);
         } else {
            // @ts-ignore
            this.rentalService.add(this.getRentableCar()).subscribe(response => {
               if (!response.success) {
                  this.toastrService.error(response.message);
               } else {
                  this.toastrService.success(response.message);
                  this.router.navigate(['/rentals']);
               }
            });
         }
      });
   }

   getRentableCar(): RentableCar {
      return this.rentableCarService.getRentableCar();
   }
}
