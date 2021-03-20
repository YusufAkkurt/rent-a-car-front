import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
   name: 'brandFilter'
})

export class BrandFilterPipe implements PipeTransform {

   transform(value: Brand[], filterText: string): Brand[] {
      filterText = filterText ? filterText.toLocaleLowerCase() : '';

      return filterText
         ? value.filter((brand: Brand) => brand.name.toLocaleLowerCase().indexOf(filterText) !== -1)
         : value;
   }
}
