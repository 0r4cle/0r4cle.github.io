import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base';
import { environment } from 'environments/environment';
import { AppModule } from 'app/app.module';
registerLicense(
    'ORg4AjUWIQA/Gnt2VVhhQ1Fac11JW3xNYVF2R2FJe1RzdF9DZkwgOX1dQ19hSXtTcEVhWndceXfdQmY='
);
if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
