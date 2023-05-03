import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { amosDrawerComponent } from '@amos/components/drawer/drawer.component';

@NgModule({
    declarations: [amosDrawerComponent],
    imports: [CommonModule],
    exports: [amosDrawerComponent],
})
export class amosDrawerModule {}
