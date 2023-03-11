import { Route } from '@angular/router';
import { NotesComponent } from 'app/modules/admin/dashboards/notes/notes/notes.component';
import { NotesListComponent } from 'app/modules/admin/dashboards/notes/notes/list/list.component';

export const notesRoutes: Route[] = [
    {
        path: '',
        component: NotesComponent,
        children: [
            {
                path: '',
                component: NotesListComponent,
            },
        ],
    },
];
