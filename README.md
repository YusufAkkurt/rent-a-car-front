# Rent A Car

## Backend with Angular

Kurumsal mimari yapısı kullanılarak  **Clean Code** ile **SOLID** kuralları dahilinde oluşturulmuş, Angular frameworkü ile yazılmış, Araba kiralama fikri üzerinden ilerlenmştir.

#### Bağlı Olduğu Restful API: [Rent A Car BackEnd](https://github.com/YusufAkkurt/RentACar "Rent A Car BackEnd")

### Projeden Görüntüler
![rent-a-car-v3](https://user-images.githubusercontent.com/56835547/114316215-45a02200-9b0b-11eb-9faf-8d190d91751c.gif)

### Projenin İçeriği
- CRUD Operasyonlar
  - Add, Ekleme
  - Read, Okuma
  - Update, Güncelleme
  - Delete, Silme
- Filtreleme
 - String veri ile
 - Id ile çoklu filtreleme
- Auth
  - Login
  - Register
  - Profile Update
  - Password Update
- Reactive Forms
- Validasyon işlemleri
  - Toastr
- Componentler arası veri Transfer, Child to Parent Data Binding
- Locale Storage kontrolü
- Models
- Services
- Custom pipes
- Interceptor
  - Auth: Http isteklerinde, Access Token'ı gönderiyor
  - Expiration: Access Token'in süresi dolduğunda, oturum bilgilerini silip, giriş sayfasına yönlendiriyor
- Bootsrat v5 Beta 2
- Bootsrap Icons v1.4.0

------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
