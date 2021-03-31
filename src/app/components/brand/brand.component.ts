import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../models/entities/brand';

@Component({
   selector: 'app-brand',
   templateUrl: './brand.component.html',
   styleUrls: ['./brand.component.css']
})

export class BrandComponent implements OnInit {

   brands: Brand[] = [];
   filterText: string = '';

   constructor(private brandService: BrandService) {
   }

   ngOnInit(): void {
      this.getBrands();
   }

   getBrands() {
      this.brandService.getBrands().subscribe((response) => {
         this.brands = response.data;
      });
   }
}
