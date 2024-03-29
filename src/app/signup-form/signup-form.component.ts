import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    'account': new FormGroup({
      'username': new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
      'password': new FormControl('', Validators.required)
    }),
  }); 
  
  get username() {
    let model = this.form.get('account.username'); 
    console.log(model);
    return model; 
  }

  login() {
    this.form.setErrors({
      inValidLogin: true
    }); 
  }
}
