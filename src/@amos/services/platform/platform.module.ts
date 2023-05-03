import { NgModule } from '@angular/core';
import { amosPlatformService } from '@amos/services/platform/platform.service';

@NgModule({
    providers: [amosPlatformService],
})
export class amosPlatformModule {
    /**
     * Constructor
     */
    constructor(private _amosPlatformService: amosPlatformService) {}
}
