import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { LandingComponent } from 'app/modules/landing/landing/landing.component';
import { landingRoutes } from 'app/modules/landing/landing/landing.routing';

@NgModule({
    declarations: [LandingComponent],
    imports: [
        RouterModule.forChild(landingRoutes),
        MatButtonModule,
        MatIconModule,
        SharedModule,
    ],
})
export class LandingModule {}
