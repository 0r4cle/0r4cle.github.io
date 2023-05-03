import { Component, ViewEncapsulation } from '@angular/core';
import { amosAnimations } from '@amos/animations';

@Component({
    selector: 'auth-confirmation-required',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: amosAnimations,
})
export class AuthConfirmationRequiredComponent {
    /**
     * Constructor
     */
    constructor() {}
}
