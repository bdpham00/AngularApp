import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if((control.value as string).indexOf(' ') > 0)
            return { cannotContainSpace: true }; 
        
        return null; 
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors|null> {
        //Asynchronous Operation: Calling the server may take a few seconds. User cannot interact with the browser
        //during this time. 

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'bao')
                    resolve({ shouldBeUnique: true }); 
                else
                    resolve(null);   
            }, 2000); 
        }); 
    }
}