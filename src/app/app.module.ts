import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { CarFilteredComponent } from './components/car-filtered/car-filtered.component';
import { BrandSelectComponent } from './components/car-filtered/brand-select/brand-select.component';
import { ColorSelectComponent } from './components/car-filtered/color-select/color-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CustomerComponent,
    ColorComponent,
    BrandComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarFilterPipe,
    CarFilteredComponent,
    BrandSelectComponent,
    ColorSelectComponent
  ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
