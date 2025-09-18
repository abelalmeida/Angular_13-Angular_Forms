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
    });

  onSubmit() {
    console.log(this.form);

  const enteredEmail = this.form.controls.email.value;
  const enteredPassword = this.form.controls.password.value
  console.log(enteredEmail, enteredPassword);
  
  }
}
