import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form = new FormGroup({
      'oldPassword': new FormControl('', Validators.required, PasswordValidators.IsInvalidOldPassword),
      'newPassword': new FormControl('', Validators.required), 
      'confirmPassword': new FormControl('', {
        'validators': PasswordValidators.passwordsShouldMatch
      })
  }); 

  get oldPassword() {
    var model = this.form.get('oldPassword');
    // console.log(model); 
    return model;  
  }

  get newPassword() {
    return this.form.get('newPassword'); 
  }

  get confirmPassword() {
    return this.form.get('confirmPassword'); 
  }
}
