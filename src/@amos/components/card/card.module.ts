import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { amosCardComponent } from '@amos/components/card/card.component';

@NgModule({
    declarations: [amosCardComponent],
    imports: [CommonModule],
    exports: [amosCardComponent],
})
export class amosCardModule {}
