import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { amosLoadingInterceptor } from '@amos/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: amosLoadingInterceptor,
            multi: true,
        },
    ],
})
export class amosLoadingModule {}
