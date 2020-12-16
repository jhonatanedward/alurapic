import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl){
    // Se da tudo certo retorna nulo
    // por isso utiliza-se na validacao errors?.lowerCase
    
    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
            return {
                lowerCase: true
            };
    }
    
    return null;
}