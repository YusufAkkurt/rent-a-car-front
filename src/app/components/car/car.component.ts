import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../../services/brand.service';
import { ColorService } from '../../services/color.service';
import { Brand } from '../../models/brand';
import { Color } from '../../models/color';

@Component({
   selector: 'app-car',
   templateUrl: './car.component.html',
   styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

   carDetail: CarDetail | undefined;
   carDetails: CarDetail[] = [];
   brands: Brand[] = [];
   colors: Color[] = [];
   filterText: string = '';
   brandFilter: string = '';
   colorFilter: string = '';

   constructor(private carService: CarService,
               private brandService: BrandService,
               private colorService: ColorService,
               private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.getCars();
      this.getBrands();
      this.getColors();
   }

   getCars() {
      this.carService.getCars().subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getBrands(){
      this.brandService.getBrands().subscribe(response => {
         this.brands = response.data
      })
   }

   getColors(){
      this.colorService.getColors().subscribe(response => {
         this.colors = response.data
      })
   }
}
