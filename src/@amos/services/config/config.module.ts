import { ModuleWithProviders, NgModule } from '@angular/core';
import { amosConfigService } from '@amos/services/config/config.service';
import { amos_APP_CONFIG } from '@amos/services/config/config.constants';

@NgModule()
export class amosConfigModule {
    /**
     * Constructor
     */
    constructor(private _amosConfigService: amosConfigService) {}

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<amosConfigModule> {
        return {
            ngModule: amosConfigModule,
            providers: [
                {
                    provide: amos_APP_CONFIG,
                    useValue: config,
                },
            ],
        };
    }
}
