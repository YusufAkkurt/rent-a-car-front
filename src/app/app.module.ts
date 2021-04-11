import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { CardComponent } from './components/card/card.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthMenuComponent } from './components/master/navbar/auth-menu/auth-menu.component';
import { ProfileComponent } from './components/auth/profile/profile.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarRentComponent } from './components/car/car-rent/car-rent.component';
import { CardSavedComponent } from './components/card/card-saved/card-saved.component';
import { ExpirationInterceptor } from './interceptors/expiration.interceptor';
import { MasterComponent } from './components/master/master.component';
import { FooterComponent } from './components/master/footer/footer.component';
import { NavbarComponent } from './components/master/navbar/navbar.component';
import { CheckNumberDirective } from './directives/check-number.directive';
import { CheckDecimalDirective } from './directives/check-decimal.directive';
import { TextInputComponent } from './inputs/text-input/text-input.component';

@NgModule({
   declarations: [
      AppComponent,
      CustomerComponent,
      ColorComponent,
      BrandComponent,
      CarComponent,
      RentalComponent,
      CarDetailComponent,
      BrandFilterPipe,
      ColorFilterPipe,
      CarFilterPipe,
      CarFilterComponent,
      CardComponent,
      BrandAddComponent,
      ColorAddComponent,
      CarAddComponent,
      BrandUpdateComponent,
      ColorUpdateComponent,
      CarUpdateComponent,
      LoginComponent,
      RegisterComponent,
      AuthMenuComponent,
      ProfileComponent,
      CarRentComponent,
      CardSavedComponent,
      MasterComponent,
      FooterComponent,
      NavbarComponent,
      CheckNumberDirective,
      CheckDecimalDirective,
      TextInputComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         positionClass: 'toast-bottom-right'
      })
   ],
   providers: [
      DatePipe,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ExpirationInterceptor, multi: true }
   ],
   bootstrap: [AppComponent]
})

export class AppModule {
}
