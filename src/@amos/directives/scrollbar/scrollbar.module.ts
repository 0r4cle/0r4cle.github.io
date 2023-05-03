import { NgModule } from '@angular/core';
import { amosScrollbarDirective } from '@amos/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [amosScrollbarDirective],
    exports: [amosScrollbarDirective],
})
export class amosScrollbarModule {}
