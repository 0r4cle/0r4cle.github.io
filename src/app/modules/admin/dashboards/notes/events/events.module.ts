import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { CommonModule } from '@angular/common';

const EventsRoutes: Route[] = [
    {
        path: '',
        component: EventsComponent,
    },
];

@NgModule({
    declarations: [EventsComponent],
    imports: [RouterModule.forChild(EventsRoutes)],
})
export class EventsModule {}
