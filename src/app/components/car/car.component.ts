import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/details/carDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-car',
   templateUrl: './car.component.html',
   styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

   carDetail: CarDetail;
   carDetails: CarDetail[] = [];
   filterText: string = '';
   apiUrl = "https://localhost:44371/"

   constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.getCarsByFiltered();
   }

   getCars() {
      this.carService.getCarDetail().subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getCarDetailsByBrandId(brandId: number) {
      this.carService.getCarDetail().subscribe(response => {
         this.carDetails = response.data.filter(car => car.brandId == brandId);
      });
   }

   getCarDetailsByColorId(colorId: number) {
      this.carService.getCarDetail().subscribe(response => {
         this.carDetails = response.data.filter(car => car.colorId == colorId);
      });
   }

   getCarsByBrandIdAndColorId(brandId: number, colorId: number) {
      this.carService.getCarDetail().subscribe(response => {
         this.carDetails = response.data.filter(car =>
            car.brandId == brandId && car.colorId == colorId
         );
      });
   }

   getCarsByFiltered() {
      this.activatedRoute.params.subscribe(param => {
         if (param['brandId'] > 0 && param['colorId'] == 0) {
            return this.getCarDetailsByBrandId(param['brandId']);
         } else if (param['colorId'] > 0 && param['brandId'] == 0) {
            return this.getCarDetailsByColorId(param['colorId']);
         } else if (param['brandId'] > 0 && param['colorId'] > 0) {
            return this.getCarsByBrandIdAndColorId(param['brandId'], param['colorId']);
         }

         return this.getCars();
      });
   }
}
