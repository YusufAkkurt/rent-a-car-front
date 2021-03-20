import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/brand';
import { CarDetail } from '../../models/carDetail';
import { CarService } from '../../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-brand',
   templateUrl: './brand.component.html',
   styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

   title: string = 'Markalar';
   listAllBrandCss: string = 'text-start list-group-item';
   carDetails: CarDetail[] = [];
   brands: Brand[] = [];
   currentBrandId: number = 0;
   filterText: string = '';

   constructor(private brandService: BrandService,
               private carService: CarService,
               private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         if (params["brandId"])
            this.getCarsByBrandId(params["brandId"]);
         else this.getCars()

         this.getBrands();
      })
   }

   getBrands() {
      this.brandService.getBrands().subscribe((response) => {
         this.brands = response.data;
      });
   }

   getCars(){
      this.carService.getCars().subscribe(response => {
         this.carDetails = response.data
      })
   }

   getCarsByBrandId(brandId: number) {
      this.carService.getCarsByBrandId(brandId).subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   setCurrentBrand(brandId: number) {
      this.currentBrandId = brandId;
      this.filterText = '';
   }

   getCurrentBrandClass(brandId: number): string {
      if (this.currentBrandId !== brandId) {
         return 'list-group-item list-group-item-action';
      }

      return 'list-group-item list-group-item-action active';
   }

   resetCurrentBrandId() {
      this.currentBrandId = 0;
   }
}
