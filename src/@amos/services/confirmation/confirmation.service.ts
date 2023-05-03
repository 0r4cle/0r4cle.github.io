import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { merge } from 'lodash-es';
import { amosConfirmationDialogComponent } from '@amos/services/confirmation/dialog/dialog.component';
import { amosConfirmationConfig } from '@amos/services/confirmation/confirmation.types';

@Injectable()
export class amosConfirmationService {
    private _defaultConfig: amosConfirmationConfig = {
        title: 'Confirm action',
        message: 'Are you sure you want to confirm this action?',
        icon: {
            show: true,
            name: 'heroicons_outline:exclamation',
            color: 'warn',
        },
        actions: {
            confirm: {
                show: true,
                label: 'Confirm',
                color: 'warn',
            },
            cancel: {
                show: true,
                label: 'Cancel',
            },
        },
        dismissible: false,
    };

    /**
     * Constructor
     */
    constructor(private _matDialog: MatDialog) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    open(
        config: amosConfirmationConfig = {}
    ): MatDialogRef<amosConfirmationDialogComponent> {
        // Merge the user config with the default config
        const userConfig = merge({}, this._defaultConfig, config);

        // Open the dialog
        return this._matDialog.open(amosConfirmationDialogComponent, {
            autoFocus: false,
            disableClose: !userConfig.dismissible,
            data: userConfig,
            panelClass: 'amos-confirmation-dialog-panel',
        });
    }
}
