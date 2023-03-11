import { Component, ViewEncapsulation } from '@angular/core';
import { navigating } from '@syncfusion/ej2-angular-schedule';
import { user as userData } from 'app/mock-api/common/user/data';
import { User } from 'app/core/user/user.types';
import { UserService } from 'app/core/user/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',

    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
    private startDate: Date;
    public days: number;
    private _user: any = userData;
    user: User;

    // STREAK

    streak: number = 0;
    ngOnInit(): void {
        const lastVisit = localStorage.getItem('lastVisit');
        if (lastVisit) {
            const now = new Date();
            const lastVisitDate = new Date(lastVisit);
            if (now.toDateString() !== lastVisitDate.toDateString()) {
                this.streak = parseInt(localStorage.getItem('streak') || '0');
                this.streak += 1;
            } else {
                this.streak = parseInt(localStorage.getItem('streak') || '0');
            }
        } else {
            this.streak = 1;
        }
        localStorage.setItem('lastVisit', new Date().toISOString());
        localStorage.setItem('streak', this.streak.toString());

        if (this.streak >= 10) {
            const divElement = document.querySelector('.streak ');
            if (divElement) {
                divElement.classList.remove('ml-6');
                divElement.classList.add('ml-10');
            }
        }
    }

    // CALCUL

    coinscount: number = 0;

    coinscountstop: any = setInterval(() => {
        this.coinscount++;
        if (this.coinscount == userData.coins) {
            clearInterval(this.coinscountstop);
        }
    }, 1);

    eventscount: number = 0;

    eventscountstop: any = setInterval(() => {
        this.eventscount++;
        if (this.eventscount == 5) {
            clearInterval(this.eventscountstop);
        }
    }, 100);

    percentcount: number = 0;

    percentcountstop: any = setInterval(() => {
        this.percentcount++;
        if (this.percentcount == 28) {
            clearInterval(this.percentcountstop);
        }
    }, 50);
}
