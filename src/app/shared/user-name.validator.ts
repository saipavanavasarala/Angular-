import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


// For single word restriction use this function 
// export function nameValidator(control: AbstractControl): {[key: string]: any} | null {
//     const name = /admin/.test(control.value);
//     return name ? {'forbiddenName' : {value: control.value}}: null;
// }


// For multiple words restriction use compound function 


export function nameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const name = forbiddenName.test(control.value);
        return name ? {'forbiddenName' : {value: control.value}}: null;
    }
}

export function exactMatchValidator(targetString: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // If the input doesn't equal the target, return an error
    return control.value === targetString ?   { noMatch: true } : null;
  };
}