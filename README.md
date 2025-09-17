# Forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Managing forms
- what are the two ways ? 
- -  template forms
- - reactive forms


## whats the difference between template and reactive?
- - template driven - setting up froms via component templates
- - implementation more complex logic & forms can be tricky

- - Reactive
- setting up froms via TS code 
- Setup requires more verbose code 
- Handling more complex forms can be easier

## Template driven forms
- how you would manage with help of template driven approach
- - currenly login.component.ts does not have an code to handle login in-
- manage this using template-driven forms
- -  from submission starts in the html file
- -  end goal is to make angular aware of this form and endputs 
- - - how do you make angular aware of the <input id = 'email"  type="email">
- - you would by addinga directive  ngModel without two way binding 
- - to be able to use ngModel need to add imports:[FormsModule] import it from '@core/forms' in the typescript file
- - - ngModel registers this element to make angular aware of it and manages username and password
- - - how to access the form the the elements
- we use # form  - htmlformelement
-  we use (ngSubmit) event- handler trigger a onSubmit method.
- what kind of form for the onSubmit() function? hoover over #form -`(reference) form: NgForm`

- - also validate user

## how to handle form validation
- attributes - vanilla 
- ngModel required  - Angular will disable browsers validation and take over
- commone directives password `ngModel required minlength="6"` and User name `ngModel required email`
- control variable
- -  #email="ngModel"/> type of NgModel
- https://angular.dev/guide/forms/template-driven-forms
