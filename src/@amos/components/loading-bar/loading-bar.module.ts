import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { amosLoadingBarComponent } from '@amos/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [amosLoadingBarComponent],
    imports: [CommonModule, MatProgressBarModule],
    exports: [amosLoadingBarComponent],
})
export class amosLoadingBarModule {}
