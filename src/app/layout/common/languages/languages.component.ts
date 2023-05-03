import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { take } from 'rxjs';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import {
    amosNavigationService,
    amosVerticalNavigationComponent,
} from '@amos/components/navigation';

@Component({
    selector: 'languages',
    templateUrl: './languages.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'languages',
})
export class LanguagesComponent implements OnInit, OnDestroy {
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _amosNavigationService: amosNavigationService,
        private _translocoService: TranslocoService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
      
        this.availableLangs = this._translocoService.getAvailableLangs();

        
        this._translocoService.langChanges$.subscribe((activeLang) => {
          
            this.activeLang = activeLang;

          
            this._updateNavigation(activeLang);
        });

     
        this.flagCodes = {
            en: 'us',
            sk: 'sk',
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent =
            this._amosNavigationService.getComponent<amosVerticalNavigationComponent>(
                'mainNavigation'
            );

        // Return if the navigation component does not exist
        if (!navComponent) {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        // Get the home dashboard item and update its title
        const homeDashboardItem = this._amosNavigationService.getItem(
            'dashboards.home',
            navigation
        );
        if (homeDashboardItem) {
            this._translocoService
                .selectTranslate('Home')
                .pipe(take(1))
                .subscribe((translation) => {
                    // Set the title
                    homeDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        const notesDashboardItem = this._amosNavigationService.getItem(
            'dashboards.notes',
            navigation
        );
        if (notesDashboardItem) {
            this._translocoService
                .selectTranslate('Notes')
                .pipe(take(1))
                .subscribe((translation) => {
                    // Set the title
                    notesDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        const eventsDashboardItem = this._amosNavigationService.getItem(
            'dashboards.events',
            navigation
        );
        if (eventsDashboardItem) {
            this._translocoService
                .selectTranslate('Events')
                .pipe(take(1))
                .subscribe((translation) => {
                    // Set the title
                    eventsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
    }
}
