import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

   footerTitle = 'Rent A Car';

   constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   }

   ngOnInit(): void {
   }
}
