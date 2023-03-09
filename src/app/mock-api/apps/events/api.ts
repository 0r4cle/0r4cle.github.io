import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { FuseMockApiUtils } from '@fuse/lib/mock-api';

@Injectable({
    providedIn: 'root',
})
export class EventsMockApi {
    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
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
        this._fuseMockApiService.onGet('api/apps/events/events');

        // -----------------------------------------------------------------------------------------------------
        // @ Chat - PATCH
        // -----------------------------------------------------------------------------------------------------
    }
}
