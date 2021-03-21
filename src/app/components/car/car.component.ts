import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-car',
   templateUrl: './car.component.html',
   styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

   carDetail: CarDetail | undefined;
   carDetails: CarDetail[] = [];
   filterText: string = '';

   constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.getCarsByFiltered();
   }

   getCars() {
      this.carService.getCars().subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByBrandId(brandId: number) {
      this.carService.getCarsByBrandId(brandId).subscribe(response => {
         this.carDetails = response.data;
      });
   }

   getCarsByColorId(colorId: number) {
      this.carService.getCarsByColorId(colorId).subscribe(response => {
         this.carDetails = response.data;
      });
   }

   getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
      this.carService.getCarsByBrandId(brandId).subscribe(response => {
         this.carDetails = response.data.filter((carDetail: CarDetail) =>
            carDetail.colorId == colorId
         );
      });
   }

   getCarsByFiltered() {
      this.activatedRoute.params.subscribe(param => {
         if (param['brandId'] > 0 && param['colorId'] == 0) {
            return this.getCarsByBrandId(param['brandId']);
         } else if (param['colorId'] > 0 && param['brandId'] == 0) {
            return this.getCarsByColorId(param['colorId']);
         } else if (param['brandId'] > 0 && param['colorId'] > 0) {
            return this.getCarsByBrandIdAndColorId(param['brandId'], param['colorId']);
         }

         return this.getCars();
      });
   }
}
