import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if((control.value as string).indexOf(' ') > 0)
            return { cannotContainSpace: true }; 
        
        return null; 
    }
}