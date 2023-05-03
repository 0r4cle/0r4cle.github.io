import { NgModule } from '@angular/core';
import { amosMediaWatcherService } from '@amos/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [amosMediaWatcherService],
})
export class amosMediaWatcherModule {
    /**
     * Constructor
     */
    constructor(private _amosMediaWatcherService: amosMediaWatcherService) {}
}
