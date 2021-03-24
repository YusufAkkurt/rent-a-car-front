import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { CardComponent } from './components/card/card.component';

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
      CarFilterComponent,
      RentalAddComponent,
      CardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [DatePipe],
   bootstrap: [AppComponent]
})

export class AppModule {
}
