import { ValidationErrors } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms';
import { reject } from 'q';

export class PasswordValidators{
    static checkPassword(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value) == "1234") {
                   resolve({
                       checkPassword: true
                   }) 
                }
                else
                    resolve(null); 
            }, '2000')
        }); 
    }
}