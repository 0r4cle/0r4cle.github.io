import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { amosConfirmationService } from '@amos/services/confirmation/confirmation.service';
import { amosConfirmationDialogComponent } from '@amos/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [amosConfirmationDialogComponent],
    imports: [MatButtonModule, MatDialogModule, MatIconModule, CommonModule],
    providers: [amosConfirmationService],
})
export class amosConfirmationModule {
    /**
     * Constructor
     */
    constructor(private _amosConfirmationService: amosConfirmationService) {}
}
