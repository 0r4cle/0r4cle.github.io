import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { amosCardModule } from '@amos/components/card';
import { amosAlertModule } from '@amos/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { AuthSignUpComponent } from 'app/modules/auth/sign-up/sign-up.component';
import { authSignupRoutes } from 'app/modules/auth/sign-up/sign-up.routing';

@NgModule({
    declarations: [AuthSignUpComponent],
    imports: [
        RouterModule.forChild(authSignupRoutes),
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        amosCardModule,
        amosAlertModule,
        SharedModule,
    ],
})
export class AuthSignUpModule {}
