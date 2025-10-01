import { Component } from '@angular/core';

import { ReactiveFormsModule, Validators, FormGroup, FormControl, FormArray, AbstractControl}from '@angular/forms';


// validation function


function equalValues(controlName1: string, controlName2: string) {

  return (control: AbstractControl) => {
  const password = control.get(controlName1)?.value;
  const confirmPassword = control.get(controlName2)?.value;
  if (password === confirmPassword) {
    return null;
  }
  return { passwordsNotEqual: true };
};
}

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
    
      }),

      passwords: new FormGroup({
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      }, 
      {
        validators: [ equalValues('password', 'confirmPassword') ]
      }),
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      address: new FormGroup({
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
      }),

      role: new FormControl<'student' | 'employee' | 'founder' | 'other'
      >('student', {
        validators: [Validators.required],
      }),
      source: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
      acquisition: new FormControl('', {
        validators: [Validators.required],
      }),
      agree: new FormControl(false, {
        validators: [Validators.requiredTrue],
      }),
    });

  onSubmit() {
    console.log(this.form);
    console.log("Invalid Form");
    if(this.form.invalid){
      return;
    }

  const enteredEmail = this.form.controls.email.value;
  // const enteredPassword = this.form.controls.password.value
  const enteredPassword = this.form.controls.passwords.get('password')?.value;
  // console.log(enteredEmail, enteredPassword);

  this.form.reset();
  
  
  }
}
