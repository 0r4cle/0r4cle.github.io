import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { amosConfirmationModule } from '@amos/services/confirmation';
import { amosLoadingModule } from '@amos/services/loading';
import { amosMediaWatcherModule } from '@amos/services/media-watcher/media-watcher.module';
import { amosPlatformModule } from '@amos/services/platform/platform.module';
import { amosSplashScreenModule } from '@amos/services/splash-screen/splash-screen.module';
import { amosUtilsModule } from '@amos/services/utils/utils.module';

@NgModule({
    imports: [
        amosConfirmationModule,
        amosLoadingModule,
        amosMediaWatcherModule,
        amosPlatformModule,
        amosSplashScreenModule,
        amosUtilsModule,
    ],
    providers: [
        {
            
            provide: MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                version: true,
            },
        },
        {

            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
    ],
})
export class amosModule {
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: amosModule) {
        if (parentModule) {
            throw new Error(
                'Amos has already been loaded. Import this module in the AppModule only!'
            );
        }
    }
}
