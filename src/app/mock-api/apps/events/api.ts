import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { amosMockApiService } from '@amos/lib/mock-api/mock-api.service';
import { amosMockApiUtils } from '@amos/lib/mock-api';

@Injectable({
    providedIn: 'root',
})
export class EventsMockApi {
    /**
     * Constructor
     */
    constructor(private _amosMockApiService: amosMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();

        // Modify the chats array to attach certain data to it
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Chats - GET
        // -----------------------------------------------------------------------------------------------------

        // -----------------------------------------------------------------------------------------------------
        // @ Chat - GET
        // -----------------------------------------------------------------------------------------------------
        this._amosMockApiService.onGet('api/apps/events/events');

        // -----------------------------------------------------------------------------------------------------
        // @ Chat - PATCH
        // -----------------------------------------------------------------------------------------------------
    }
}
