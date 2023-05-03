import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { amosConfirmationConfig } from '@amos/services/confirmation/confirmation.types';

@Component({
    selector: 'amos-confirmation-dialog',
    templateUrl: './dialog.component.html',
    styles: [
        `
            .amos-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
})
export class amosConfirmationDialogComponent {
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: amosConfirmationConfig) {}
}
