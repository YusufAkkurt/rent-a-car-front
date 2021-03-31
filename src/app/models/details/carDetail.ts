import { Car } from '../entities/car';

export interface CarDetail extends Car {
   brandName: string
   colorName: string
}
