import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../models/brand';

@Component({
   selector: 'app-brand-select',
   templateUrl: './brand-select.component.html',
   styleUrls: ['./brand-select.component.css']
})

export class BrandSelectComponent implements OnInit {

   brands: Brand[] = [];

   constructor(private brandService: BrandService) {
   }

   ngOnInit(): void {
      this.getBrands();
   }

   getBrands() {
      this.brandService.getBrands().subscribe(response => {
         this.brands = response.data;
      });
   }
}
