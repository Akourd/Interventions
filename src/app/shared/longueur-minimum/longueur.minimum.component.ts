import { AbstractControl, ValidatorFn } from "@angular/forms";

export class ZonesValidator {
    static longueurMinimum(valeurMin: number): ValidatorFn {
        // Sous ANGULAR dans les validateurs pour indiquer un succes retourner NULL
        return (c: AbstractControl): { [key: string]: boolean } | null => {

            // IF pour null ici?
            if (!c.value == null) {

                return { 'nbCaracteresInsuffisants': true };

            } else if (c.value.trim().length >= valeurMin) {

                return null;
            } else if (c.value.trim().length < valeurMin) {
                return { 'nbCaracteresInsuffisants': true };

            }



        };

    }
}