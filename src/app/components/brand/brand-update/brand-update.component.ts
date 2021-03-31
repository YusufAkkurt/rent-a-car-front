import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from '../../../models/entities/brand';
import { BrandService } from '../../../services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-brand-update',
   templateUrl: './brand-update.component.html',
   styleUrls: ['./brand-update.component.css']
})

export class BrandUpdateComponent implements OnInit {

   brandUpdateForm: FormGroup;
   brand: Brand;

   constructor(private formBuilder: FormBuilder,
               private brandService: BrandService,
               private activatedRoute: ActivatedRoute,
               private toastrService: ToastrService) {
   }

   ngOnInit(): void {
      this.activatedRoute.params.subscribe(param => {
         this.getBrandById(param['brandId']);
      });
   }

   createBrandUpdateForm() {
      this.brandUpdateForm = this.formBuilder.group({
         id: [this.brand.id, Validators.required],
         name: [this.brand.name, Validators.required]
      });
   }

   getBrandById(brandId: number) {
      this.brandService.getBrandById(brandId).subscribe(response => {
         this.brand = response.data;
         this.createBrandUpdateForm();
      });
   }

   update() {
      let brand: Brand = Object.assign({}, this.brandUpdateForm.value);

      if (!this.brandUpdateForm.valid) {
         this.toastrService.warning('Lütfen boş bilgi bırakmayın', 'Dikkat');
         return;
      }

      this.brandService.update(brand).subscribe(responseSuccess => {
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
