import { Component, OnInit } from '@angular/core';
import { RentableCar } from '../../../models/rentableCar';
import { RentableCarService } from '../../../services/rentable-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-rental-add',
   templateUrl: './rental-add.component.html',
   styleUrls: ['./rental-add.component.css']
})

export class RentalAddComponent implements OnInit {

   returnDate: Date | undefined;

   constructor(private rentableCarService: RentableCarService,
               private activatedRoute: ActivatedRoute,
               private datePipe: DatePipe,
               private router: Router,
               private toastrService: ToastrService) {
   }

   ngOnInit(): void {
   }

   createRentableCar() {
      if (!this.returnDate) {
         this.toastrService.error('Dönüş tarihi boş olamaz');
      } else {
         let currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-ddTH:m:s');

         this.activatedRoute.params.subscribe(param => {
            let rentableCar = new RentableCar();

            rentableCar.carId = Number(param['carId']);
            rentableCar.customerId = 1;
            // @ts-ignore
            rentableCar.rentDate = currentDate;
            rentableCar.returnDate = this.returnDate;

            this.rentableCarService.addToRentableCar(rentableCar);

            this.router.navigate(['/cards']);
         });
      }
   }

   getNextButtonClass() {
      if (this.returnDate) {
         return 'btn btn-primary rounded-0';
      }

      return 'btn btn-primary rounded-0 disabled'
   }
}
