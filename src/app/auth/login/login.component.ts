import { afterNextRender, Component, inject, viewChild, DestroyRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounce, debounceTime, from } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {

      // save the email to local storage in browser
      const savedFrom = window.localStorage.getItem('save-login-form');

      if(savedFrom){
       const loadedFrom = JSON.parse(savedFrom);
       const savedEmail = loadedFrom.email;
       setTimeout(() => {
        this.form().controls['email'].setValue(savedEmail);
       });
       //
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({

        next:(value) => window.localStorage.setItem('save-login-form', JSON.stringify({email: value.email})),                    // save to local storage in browser 
      });

      this.destroyRef.onDestroy(() => {
      subscription?.unsubscribe();
    });
    });

  
  }

  // extract the form data
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

    onSubmit(formData: NgForm) {
      if(formData.invalid){
        return;
      }
   const enteredEmail = formData.form.value.email;
   const enteredPassword = formData.form.value.password;

   console.log(formData.form);
   console.log(enteredEmail, enteredPassword);

   // reset the form
    formData.form.reset();
  }
}
