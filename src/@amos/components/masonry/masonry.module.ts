import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { amosMasonryComponent } from '@amos/components/masonry/masonry.component';

@NgModule({
    declarations: [amosMasonryComponent],
    imports: [CommonModule],
    exports: [amosMasonryComponent],
})
export class amosMasonryModule {}
