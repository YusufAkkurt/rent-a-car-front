import { Rental } from '../entities/rental';

export interface RentDetail extends Rental {
   carBrand: string
   carModel: string
   customerFirstName: string
   customerLastName: string
   companyName: string
}
