import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

   footerTitle: string = environment.projectName

   constructor() {
   }

   ngOnInit(): void {
   }
}
