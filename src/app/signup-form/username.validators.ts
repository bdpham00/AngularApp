import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { setTimeout } from "timers";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors {
        if((control.value as string).indexOf(' ') > 0)
            return { cannotContainSpace: true }; 
        
        return null; 
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        //Asynchronous Operation: Calling the server may take a few seconds. User cannot interact with the browser
        //during this time. 

        setTimeout(() => {
            console.log('ok'); 
        }, 2000); 

        if((control.value as string) === "bao")
            return { shouldBeUnique: true }

        return null;  
    }
}