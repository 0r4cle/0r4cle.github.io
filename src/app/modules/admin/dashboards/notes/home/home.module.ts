import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/modules/admin/dashboards/notes/home/home.component';
import { UserModule } from 'app/layout/common/user/user.module';

import { TranslocoModule } from '@ngneat/transloco';

const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(HomeRoutes), UserModule, TranslocoModule],
})
export class HomeModule {}
