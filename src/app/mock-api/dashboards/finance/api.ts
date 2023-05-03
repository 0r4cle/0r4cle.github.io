import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { amosMockApiService } from '@amos/lib/mock-api';
import { finance as financeData } from 'app/mock-api/dashboards/finance/data';

@Injectable({
    providedIn: 'root',
})
export class FinanceMockApi {
    private _finance: any = financeData;

    /**
     * Constructor
     */
    constructor(private _amosMockApiService: amosMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._amosMockApiService
            .onGet('api/dashboards/finance')
            .reply(() => [200, cloneDeep(this._finance)]);
    }
}
