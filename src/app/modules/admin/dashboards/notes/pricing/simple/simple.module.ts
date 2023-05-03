import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { amosCardModule } from '@amos/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { PricingSimpleComponent } from 'app/modules/admin/dashboards/notes/pricing/simple/simple.component';
import { pricingSimpleRoutes } from 'app/modules/admin/dashboards/notes/pricing/simple/simple.routing';

@NgModule({
    declarations: [PricingSimpleComponent],
    imports: [
        RouterModule.forChild(pricingSimpleRoutes),
        MatButtonModule,
        MatIconModule,
        amosCardModule,
        SharedModule,
    ],
})
export class PricingSimpleModule {}
