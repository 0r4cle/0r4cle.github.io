import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { amosAlertComponent } from '@amos/components/alert/alert.component';

@NgModule({
    declarations: [amosAlertComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [amosAlertComponent],
})
export class amosAlertModule {}
