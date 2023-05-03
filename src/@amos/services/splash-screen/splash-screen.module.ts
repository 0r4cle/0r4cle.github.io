import { NgModule } from '@angular/core';
import { amosSplashScreenService } from '@amos/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [amosSplashScreenService],
})
export class amosSplashScreenModule {
    /**
     * Constructor
     */
    constructor(private _amosSplashScreenService: amosSplashScreenService) {}
}
