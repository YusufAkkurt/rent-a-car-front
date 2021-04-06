import { Car } from '../entities/car';
import { CarImage } from '../entities/carImage';

export interface CarDetail extends Car {
   brandName: string
   colorName: string
   carImages: CarImage[]
}
