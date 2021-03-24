import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CarDetail } from '../../../models/carDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../../services/car-image.service';
import { CarImage } from '../../../models/carImage';
import { RentalService } from '../../../services/rental.service';
import { Rental } from '../../../models/rental';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-car-detail',
   templateUrl: './car-detail.component.html',
   styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

   // @ts-ignore
   carDetail: CarDetail;
   carImages: CarImage[] = [];
   imageBaseUrl = 'https://localhost:44371/';
   rental: Rental[] = [];

   constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private carService: CarService,
      private carImageService: CarImageService,
      private rentalService: RentalService,
      private toastrService: ToastrService
   ) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
         if (params['carId']) {
            this.getPhotosByCarId(params['carId']);
            this.getCarById(params['carId']);
         }
      });
   }

   getCarById(id: number) {
      this.carService.getCarById(id).subscribe((response) => {
         this.carDetail = response.data;
      });
   }

   getPhotosByCarId(carId: number) {
      this.carImageService.getPhotosByCarId(carId).subscribe((response) => {
         this.carImages = response.data;
      });
   }

   rentableCar(carId: number) {
      this.rentalService.getRentalsByCarId(carId).subscribe(response => {
         this.rental = response.data.filter((rent: Rental) => rent.returnDate === null);
         if (this.rental.length > 0) {
            this.toastrService.error('Bu araç henüz teslim edilmemiş');
         } else {
            this.router.navigate(['/rentals/', carId]);
         }
      });
   }

   getCurrentSliderImageClass(sliderImage: CarImage): string {
      if (this.carImages[0] === sliderImage) {
         return 'carousel-item active';
      }

      return 'carousel-item'
   }
}
