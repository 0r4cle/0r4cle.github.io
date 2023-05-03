import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { amosHighlightComponent } from '@amos/components/highlight/highlight.component';

@NgModule({
    declarations: [amosHighlightComponent],
    imports: [CommonModule],
    exports: [amosHighlightComponent],
})
export class amosHighlightModule {}
