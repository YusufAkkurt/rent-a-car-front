import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/entities/card';
import { CardService } from '../../services/card.service';
import { RentalService } from '../../services/rental.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rental } from '../../models/entities/rental';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { CustomerService } from '../../services/customer.service';

@Component({
   selector: 'app-card',
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

   totalPrice: number = 0;
   rentedCar: Rental;
   card: Card;
   cardAddForm: FormGroup;

   constructor(private rentalService: RentalService,
               private formBuilder: FormBuilder,
               private localStorageService: LocalStorageService,
               private toastrService: ToastrService,
               private router: Router,
               private cardService: CardService,
               private customerService: CustomerService) {
   }

   ngOnInit(): void {
      this.checkNullRentingCar();
      this.createCardAddForm();
   }

   createCardAddForm() {
      this.cardAddForm = this.formBuilder.group({
         customerId: [this.localStorageService.getCurrentCustomer().id, Validators.required],
         cardNameSurname: ['', Validators.required],
         cardNumber: ['', Validators.required],
         validDate: ['', Validators.required],
         cvv: ['', Validators.required],
         save: [true]
      });
   }

   add() {
      this.rentedCar = Object.assign({}, this.rentalService.getRentingCar());

      if (this.cardAddForm.invalid) {
         return this.toastrService.warning('Bilgilerinizi kontrol ediniz', 'Dikkat');
      }

      if (this.cardAddForm.value.save) {
         delete this.cardAddForm.value.save;
         this.card = Object.assign({}, this.cardAddForm.value);
         this.addCard(this.card);
      }

      return this.addRental(this.rentedCar);
   }

   updateCurrentCustomerFindexPoint() {
      let currentCustomer = this.localStorageService.getCurrentCustomer();

      this.customerService.getCustomerByEmail(currentCustomer.email).subscribe(response => {
         this.localStorageService.setCurrentCustomer(response.data);
      });
   }

   addRental(rental: Rental) {
      this.rentalService.add(rental).subscribe(responseSuccess => {
         this.toastrService.success(responseSuccess.message, 'Başarılı');
         this.updateCurrentCustomerFindexPoint();

         return this.router.navigate(['']);
      }, responseError => {
         console.log(responseError);
         if (responseError.error.ValidationErrors) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return false;
         }

         this.toastrService.error(responseError.error.message, 'Hata');
         return false;
      });
   }

   addCard(card: Card) {
      this.cardService.add(card).subscribe(responseSuccess => {
         return responseSuccess.success;
      }, responseError => {
         if (responseError.error.ValidationErrors.length > 0) {
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
               this.toastrService.error(
                  responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
               );
            }

            return;
         }

         this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
         return;
      });
   }

   checkNullRentingCar() {
      if (!this.rentalService.getRentingCar()) {
         this.toastrService.error(
            'Araba bilgileri boş, Önce bilgileri kontrol edin', 'Hata!'
         );
         return this.router.navigate(['']);
      }

      return true;
   }

   setSelectedCard(cardOnEventing: Card) {
      this.card = Object.assign(cardOnEventing, { save: false });
      this.cardAddForm.setValue(this.card);
   }
}
