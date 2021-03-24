import { Injectable } from '@angular/core';
import { RentableCar } from '../models/rentableCar';
import { RentableCarExport } from '../models/rentableCarExport';

@Injectable({
   providedIn: 'root'
})

export class RentableCarService {

   constructor() {
   }

   addToRentableCar(rentableCar: RentableCar) {
      let item = RentableCarExport.find(car => car.carId == rentableCar.carId);
      if (item){
         return console.log("Araba zaten bellekte")
      }

      RentableCarExport.push(rentableCar)
   }

   getRentableCar(): RentableCar{
      return RentableCarExport[0]
   }
}
