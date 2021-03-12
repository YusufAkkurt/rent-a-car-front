import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})

export class NaviComponent implements OnInit {

  title:string = 'Rent A Car';

  constructor() {
  }

  ngOnInit(): void {
  }
}