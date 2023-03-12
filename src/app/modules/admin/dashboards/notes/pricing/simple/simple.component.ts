import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'pricing-simple',
    templateUrl: './simple.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSimpleComponent {
    yearlyBilling: boolean = true;
    inputValue: number;
    result: number;

    updateResult() {
        const inputVal = parseFloat(this.inputValue.toString());
        if (isNaN(inputVal)) {
            this.result = null;
        } else {
            const resultVal = inputVal * 100;
            this.result = resultVal;
        }
    }

    ngOnInit() {
        this.updateResult();
    }
    /**
     * Constructor
     */
    constructor() {}
}
