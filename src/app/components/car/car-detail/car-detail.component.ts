import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { CarDetail } from '../../../models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../../services/car-image.service';
import { CarImage } from '../../../models/carImage';

@Component({
   selector: 'app-car-detail',
   templateUrl: './car-detail.component.html',
   styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements OnInit {

   // @ts-ignore
   carDetail: CarDetail;
   carImages: CarImage[] = [];
   imageBaseUrl = "https://localhost:44371/";

   constructor(
      private carService: CarService,
      private activatedRoute: ActivatedRoute,
      private carImageService: CarImageService,
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

   getCurrentSliderImageClass(sliderImage: CarImage): string{
      if (this.carImages[0] === sliderImage)
         return 'carousel-item active'

      return 'carousel-item'
   }
}
