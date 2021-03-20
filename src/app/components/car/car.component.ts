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
      this.activatedRoute.params.subscribe((params) => {
         if (params['brandId']) {
            return this.getCarsByBrandId(params['brandId']);
         }
         if (params['colorId']) {
            return this.getCarsByColorId(params['colorId']);
         }

         return this.getCars();
      });
   }

   getCars() {
      this.carService.getCars().subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByBrandId(brandId: number) {
      this.carService.getCarsByBrandId(brandId).subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarsByColorId(colorId: number) {
      this.carService.getCarsByColorId(colorId).subscribe((response) => {
         this.carDetails = response.data;
      });
   }
}
