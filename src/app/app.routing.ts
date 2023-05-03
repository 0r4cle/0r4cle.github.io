import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';


export const appRoutes: Route[] = [
   
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/home' },

   
    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'dashboards/home',
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.module'
                    ).then((m) => m.AuthConfirmationRequiredModule),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.module'
                    ).then((m) => m.AuthForgotPasswordModule),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.module'
                    ).then((m) => m.AuthResetPasswordModule),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.module').then(
                        (m) => m.AuthSignInModule
                    ),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.module').then(
                        (m) => m.AuthSignUpModule
                    ),
            },
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.module').then(
                        (m) => m.AuthSignOutModule
                    ),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.module'
                    ).then((m) => m.AuthUnlockSessionModule),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'landing',
                loadChildren: () =>
                    import('app/modules/landing/landing/landing.module').then(
                        (m) => m.LandingModule
                    ),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'dashboards',
                children: [
                

                    {
                        path: 'home',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/home/home.module'
                            ).then((m) => m.HomeModule),
                    },
                    {
                        path: 'notes',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/notes/notes.module'
                            ).then((m) => m.NotesModule),
                    },
                    {
                        path: 'settings',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/settings/settings.module'
                            ).then((m) => m.SettingsModule),
                    },
                    {
                        path: 'events',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/events/events.module'
                            ).then((m) => m.EventsModule),
                    },
                    {
                        path: 'help-center',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/help-center/help-center.module'
                            ).then((m) => m.HelpCenterModule),
                    },
                    {
                        path: 'pricing',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/notes/pricing/simple/simple.module'
                            ).then((m) => m.PricingSimpleModule),
                    },
                ],
            },
        ],
    },
];
