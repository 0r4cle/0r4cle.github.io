import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { amosCardModule } from '@amos/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignOutComponent } from 'app/modules/auth/sign-out/sign-out.component';
import { authSignOutRoutes } from 'app/modules/auth/sign-out/sign-out.routing';

@NgModule({
    declarations: [AuthSignOutComponent],
    imports: [
        RouterModule.forChild(authSignOutRoutes),
        MatButtonModule,
        amosCardModule,
        SharedModule,
    ],
})
export class AuthSignOutModule {}
