import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
   { path: 'rentals', component: RentalComponent },
   { path: 'customers', component: CustomerComponent },
   { path: 'cars', component: CarComponent },
   { path: 'brands', component: BrandComponent },
   { path: 'colors', component: ColorComponent },
   { path: '**', redirectTo: 'rentals', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}