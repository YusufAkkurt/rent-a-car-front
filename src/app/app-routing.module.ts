import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { CardComponent } from './components/card/card.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';

const routes: Routes = [
   { path: 'rentals', component: RentalComponent },
   { path: 'rentals/:carId', component:RentalAddComponent },

   { path: 'customers', component: CustomerComponent },

   { path: 'cars', component: CarComponent },
   { path: 'cars/add', component: CarAddComponent },
   { path: 'cars/update/:carId', component: CarUpdateComponent },
   { path: 'cars/filter/:brandId/:colorId', component: CarComponent },
   { path: 'cars/detail/:carId', component: CarDetailComponent },

   { path: 'brands', component: BrandComponent },
   { path: 'brands/add', component: BrandAddComponent },
   { path: 'brands/update/:brandId', component: BrandUpdateComponent },
   { path: 'brands/:brandId', component: BrandComponent },

   { path: 'colors', component: ColorComponent },
   { path: 'colors/add', component: ColorAddComponent },
   { path: 'colors/update/:colorId', component: ColorUpdateComponent },
   { path: 'colors/:colorId', component: ColorComponent },

   { path: 'cards', component: CardComponent },

   { path: '**', redirectTo: 'cars', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}
