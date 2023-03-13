import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'settings-plan-billing',
    templateUrl: './plan-billing.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPlanBillingComponent implements OnInit {
    planBillingForm: UntypedFormGroup;
    plans: any[];

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.planBillingForm = this._formBuilder.group({
            plan: ['team'],
            cardHolder: ['Samuel Zima'],
            cardNumber: [''],
            cardExpiration: [''],
            cardCVC: [''],
            country: ['slovakia'],
            zip: [''],
        });

        // Setup the plans
        this.plans = [
            {
                value: 'basic',
                label: 'Individual',
                details: 'Starter plan for individuals.',
                price: '',
            },
            {
                value: 'team',
                label: 'Popular',
                details: 'Buy more notes.',
                price: '5',
            },
            {
                value: 'enterprise',
                label: 'Trios',
                details: 'For tripple the notes.',
                price: '3',
            },
        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
