import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { amosVerticalNavigationComponent } from '@amos/components/navigation/vertical/vertical.component';
import { amosNavigationService } from '@amos/components/navigation/navigation.service';
import { amosNavigationItem } from '@amos/components/navigation/navigation.types';

@Component({
    selector: 'amos-vertical-navigation-divider-item',
    templateUrl: './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class amosVerticalNavigationDividerItemComponent
    implements OnInit, OnDestroy
{
    @Input() item: amosNavigationItem;
    @Input() name: string;

    private _amosVerticalNavigationComponent: amosVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _amosNavigationService: amosNavigationService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._amosVerticalNavigationComponent =
            this._amosNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._amosVerticalNavigationComponent.onRefreshed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
