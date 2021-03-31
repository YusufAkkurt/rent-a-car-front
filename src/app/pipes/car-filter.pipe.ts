import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/details/carDetail';

@Pipe({
  name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform {

   transform(value: CarDetail[], filterText: string): CarDetail[] {
      filterText = filterText ? filterText.toLocaleLowerCase() : '';

      let filteredQuery = (carDetail: CarDetail) =>
         (`${ carDetail.brandName } ${ carDetail.description }`).toLocaleLowerCase()
            .indexOf(filterText) !== -1

      return filterText ? value.filter(filteredQuery) : value;
   }
}
