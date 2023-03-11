<<<<<<< HEAD
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    startCounters() {
        const countersEl = document.getElementsByClassName('counter');

        Array.from(countersEl).forEach((counterEl: HTMLElement) => {
            counterEl.textContent = '0';
            this.incrementCounter(counterEl);
        });
    }

    private incrementCounter(counterEl: HTMLElement) {
        let currentNum = +counterEl.textContent;
        const dataCeil = +counterEl.getAttribute('data-ceil');
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counterEl.textContent = currentNum.toString();
            setTimeout(() => this.incrementCounter(counterEl), 50);
        } else {
            counterEl.textContent = dataCeil.toString();
        }
    }
}
=======
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    startCounters() {
        const countersEl = document.getElementsByClassName('counter');

        Array.from(countersEl).forEach((counterEl: HTMLElement) => {
            counterEl.textContent = '0';
            this.incrementCounter(counterEl);
        });
    }

    private incrementCounter(counterEl: HTMLElement) {
        let currentNum = +counterEl.textContent;
        const dataCeil = +counterEl.getAttribute('data-ceil');
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counterEl.textContent = currentNum.toString();
            setTimeout(() => this.incrementCounter(counterEl), 50);
        } else {
            counterEl.textContent = dataCeil.toString();
        }
    }
}
>>>>>>> b059efdbc2673a6a20f9fc096118dd0bed670edf
