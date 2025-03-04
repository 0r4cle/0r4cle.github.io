import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { amosModule } from '@amos';
import { amosConfigModule } from '@amos/services/config';
import { amosMockApiModule } from '@amos/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';

import { appRoutes } from 'app/app.routing';

import {
    ScheduleModule,
    RecurrenceEditorModule,
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import {
    CalendarModule,
    DatePickerModule,
    TimePickerModule,
    DateRangePickerModule,
    DateTimePickerModule,
} from '@syncfusion/ej2-angular-calendars';
import { TranslocoCoreModule } from './core/transloco/transloco.module';

const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ScheduleModule,
        RecurrenceEditorModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // amos, amosConfig & amosMockAPI
        amosModule,
        amosConfigModule.forRoot(appConfig),
        amosMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        CalendarModule,
        DatePickerModule,
        TranslocoCoreModule,
        TimePickerModule,
        DateRangePickerModule,
        DateTimePickerModule,
    ],
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        MonthAgendaService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
