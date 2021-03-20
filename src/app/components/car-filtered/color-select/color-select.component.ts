import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../../services/color.service';
import { Color } from '../../../models/color';

@Component({
   selector: 'app-color-select',
   templateUrl: './color-select.component.html',
   styleUrls: ['./color-select.component.css']
})
export class ColorSelectComponent implements OnInit {

   colors: Color[] = [];

   constructor(private colorService: ColorService) {
   }

   ngOnInit(): void {
      this.getColors();
   }

   getColors(){
      this.colorService.getColors().subscribe(response => {
         this.colors = response.data
      });
   }
}
