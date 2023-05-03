import { NgModule } from '@angular/core';
import { amosScrollResetDirective } from '@amos/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [amosScrollResetDirective],
    exports: [amosScrollResetDirective],
})
export class amosScrollResetModule {}
