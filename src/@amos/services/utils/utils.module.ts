import { NgModule } from '@angular/core';
import { amosUtilsService } from '@amos/services/utils/utils.service';

@NgModule({
    providers: [amosUtilsService],
})
export class amosUtilsModule {
    /**
     * Constructor
     */
    constructor(private _amosUtilsService: amosUtilsService) {}
}
