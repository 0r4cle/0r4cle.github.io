import { NgModule } from '@angular/core';
import { amosFindByKeyPipe } from '@amos/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [amosFindByKeyPipe],
    exports: [amosFindByKeyPipe],
})
export class amosFindByKeyPipeModule {}
