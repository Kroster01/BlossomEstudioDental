# BlossomEstudioDentalWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


install dependencies

npm i bootswatch
npm i bootstrap
npm i jquery
npm i @popperjs/core

ng add @angular/fire
npm i firebase

npm i bootstrap jquery @popperjs/core

ng g m home -m=app --route home

ng g c shared/navbar
ng g m auth/login -m=app --route login
ng g m auth/register -m=app --route register

ng g s auth/services/auth


https://www.youtube.com/watch?v=rwIOw7f0RHk&list=PL_9MDdjVuFjEJXpRgrCMvxKHgdtdk6AOJ&index=2

ng g c auth/sendEmail

https://www.youtube.com/watch?v=Y3ojE5SASFg&list=PL_9MDdjVuFjEJXpRgrCMvxKHgdtdk6AOJ&index=3


// pendentes por validar.
ng g c shared/components/header --module app
ng g m shared/components/header --module app

ng g m pages/blossom/list --module app
ng g c pages/blossom/list --module app

ng g m pages/blossom/new --module app
ng g c pages/blossom/new --module app

ng g m pages/blossom/details --module app
ng g c pages/blossom/details --module app

ng g m pages/blossom/edit --module app
ng g c pages/blossom/edit --module app