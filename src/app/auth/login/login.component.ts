import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { debounceTime, first, of } from 'rxjs';

// own validator dummy check my password has ? 

function mustContainQuestionMark(control: AbstractControl){
  if(control.value.includes('?')){
    return null;
  }
  return { mustContainQuestionMark: true };
}

// async validator dummy check
function emailIsUnque(control: AbstractControl){
  if(control.value !=='test@example.com'){

    return of (null);
  }

  return of({ emailIsUnque: true });
}
let initialEmailValue = '';
const savedForm = window.localStorage.getItem('loginFormStatus');
if(savedForm){
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
  
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {

  private destroyRef = inject(DestroyRef);
  
  constructor() {}


  ngOnInit() {
    // const savedForm = window.localStorage.setItem('saved-login-form');
    // if(savedForm){
    //   const loadedForm = JSON.parse(savedForm);
    //   this.form.patchValue({// Patches the value of the FormGroup. It accepts an object with control names as keys, and does its best to match the values to the correct controls in the group.
    //     email: loadedForm.email,
       
    //   });
    // }

    

   const subscription =  this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('loginFormStatus', JSON.stringify({email: value.email}));
      }
    })
    this.destroyRef.onDestroy(() =>subscription.unsubscribe());
  }
  // setup form
  form = new FormGroup({
    email: new FormControl(initialEmailValue, {
    validators: [Validators.email, Validators.required],
    asyncValidators: [emailIsUnque],
    }),   // validators
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
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
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {
      validators: [Validators.required],
    }),
    agree: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),

  });

  get emailIsInvalid(){
    return this.form.controls.email.invalid && this.form.controls.email.touched && this.form.controls.email.dirty;
  }

  get passwordIsInvalid(){
    return this.form.controls.password.invalid && this.form.controls.password.touched && this.form.controls.password.dirty;
  }

  // how your form is setup in the markup
  onSubmit() {
    console.log(this.form);

  const enteredEmail = this.form.controls.email.value;
  const enteredPassword = this.form.controls.password.value
  console.log(enteredEmail, enteredPassword);
  }
}

