import { Component } from '@angular/core';

import { ReactiveFormsModule, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
   imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  
    // setup form
    form = new FormGroup({
      email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    
      }),   // validators
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      street: new FormControl('', {
        validators: [Validators.required],
      }),
      number: new FormControl('', {
        validators: [Validators.required],
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required],
      }),
      city: new FormControl('', {
        validators: [Validators.required],
      }),
      role: new FormControl('', {
        validators: [Validators.required],
      }),
      acquisition: new FormControl('', {
        validators: [Validators.required],
      }),
      agree: new FormControl(false, {
        validators: [Validators.requiredTrue],
      }),
    });

  onSubmit() {
    console.log(this.form);

  const enteredEmail = this.form.controls.email.value;
  const enteredPassword = this.form.controls.password.value
  console.log(enteredEmail, enteredPassword);

  this.form.reset();
  
  
  }
}
