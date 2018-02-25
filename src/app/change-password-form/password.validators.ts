import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms/src/directives/validators';

export class PasswordValidators{
    static IsInvalidOldPassword(control: AbstractControl): Promise<ValidationErrors|null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({ IsInvalidOldPassword: true })
                else
                    resolve(null); 
            }, 2000); 
        }); 
    }
}