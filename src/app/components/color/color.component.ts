import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { CarService } from '../../services/car.service';
import { CarDetail } from '../../models/carDetail';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-color',
   templateUrl: './color.component.html',
   styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

   title: string = 'Renkler';
   listAllBrandCss: string = 'text-start list-group-item';
   carDetails: CarDetail[] = [];
   colors: Color[] = [];
   currentColorId: number = 0;
   colorFilterText: string = '';

   constructor(private colorService: ColorService,
               private carService: CarService,
               private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
         if (params["colorId"])
            this.getCarsByColorId(params["colorId"])
         else this.getCars()

         this.getColors()
      })
   }

   getCars() {
      this.carService.getCars().subscribe(response => {
         this.carDetails = response.data;
      });
   }

   getCarsByColorId(colorId: number) {
      this.carService.getCarsByColorId(colorId).subscribe((response) => {
         this.carDetails = response.data;
      });
   }

   getColors() {
      this.colorService.getColors().subscribe((response) => {
         this.colors = response.data;
      });
   }

   setCurrentColor(colorId: number) {
      this.currentColorId = colorId;
      this.colorFilterText = '';
   }

   getCurrentColorClass(colorId: number): string {
      if (this.currentColorId == colorId) {
         return 'list-group-item list-group-item-action active';
      }

      return 'list-group-item list-group-item-action';
   }

   resetCurrentColor() {
      this.currentColorId = 0;
   }
}
