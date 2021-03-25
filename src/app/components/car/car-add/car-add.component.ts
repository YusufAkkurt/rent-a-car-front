import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorService } from '../../../services/color.service';
import { BrandService } from '../../../services/brand.service';
import { Brand } from '../../../models/brand';
import { Color } from '../../../models/color';
import { ToastrService } from 'ngx-toastr';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../models/car';

@Component({
   selector: 'app-car-add',
   templateUrl: './car-add.component.html',
   styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

   // @ts-ignore
   carAddForm: FormGroup;
   brands: Brand[] = [];
   colors: Color[] = [];

   constructor(private formBuilder: FormBuilder,
               private brandService: BrandService,
               private colorService: ColorService,
               private toastrService: ToastrService,
               private carService: CarService) {
   }

   ngOnInit(): void {
      this.createCarAddForm();
      this.getBrands();
      this.getColors();
   }

   createCarAddForm() {
      this.carAddForm = this.formBuilder.group({
         brandId: ['', Validators.required],
         colorId: ['', Validators.required],
         modelYear: ['', Validators.required],
         dailyPrice: ['', Validators.required],
         description: ['', Validators.required]
      });
   }

   getBrands() {
      this.brandService.getBrands().subscribe(responseSuccess => {
         this.brands = responseSuccess.data;
      }, responseError => {
         this.toastrService.error(responseError.message, responseError.name);
      });
   }

   getColors() {
      this.colorService.getColors().subscribe(responseSuccess => {
         this.colors = responseSuccess.data;
      }, responseError => {
         this.toastrService.error(responseError.message, responseError.name);
      });
   }

   add() {
      let car: Car = Object.assign({}, this.carAddForm.value);

      car.brandId = Number(car.brandId);
      car.colorId = Number(car.colorId);
      car.modelYear = Number(car.modelYear);
      car.dailyPrice = Number(car.dailyPrice);

      if (!this.carAddForm.valid) {
         this.toastrService.warning('Lütfen boş bilgi bırakmayın', 'Dikkat');
         return;
      }

      this.carService.add(car).subscribe(responseSuccess => {
         return this.toastrService.success(responseSuccess.message, 'Başarılı');
      }, responseError => {
         if (responseError.error.ValidationErrors.length == 0) {
            this.toastrService.error(responseError.error.Message, responseError.error.StatusCode);
            return;
         }

         for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(
               responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
            );
         }
      });
   }
}
