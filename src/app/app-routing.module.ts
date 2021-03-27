import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CardComponent } from './components/card/card.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

const routes: Routes = [
   { path: 'rentals', component: RentalComponent },
   { path: 'customers', component: CustomerComponent },
   { path: 'cards', component: CardComponent },
   {
      path: 'cars', children: [
         { path: '', component: CarComponent },
         { path: 'add', component: CarAddComponent },
         { path: 'update/:carId', component: CarUpdateComponent },
         { path: 'filter/:brandId/:colorId', component: CarComponent },
         { path: 'detail/:carId', component: CarDetailComponent },
      ]
   },
   {
      path: 'brands', children: [
         { path: '', component: BrandComponent },
         { path: 'add', component: BrandAddComponent },
         { path: 'update/:brandId', component: BrandUpdateComponent }
      ]
   },
   {
      path: 'colors', children: [
         { path: '', component: ColorComponent },
         { path: 'add', component: ColorAddComponent },
         { path: 'update/:colorId', component: ColorUpdateComponent }
      ]
   },
   {
      path: 'auth', children: [
         { path: 'login', component: LoginComponent },
         { path: 'register', component: RegisterComponent },
         { path: 'profile', component: ProfileComponent },
      ]
   },

   { path: '**', redirectTo: 'cars', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {
}
