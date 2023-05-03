import { Injectable } from '@angular/core';
import { amosDrawerComponent } from '@amos/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root',
})
export class amosDrawerService {
    private _componentRegistry: Map<string, amosDrawerComponent> = new Map<
        string,
        amosDrawerComponent
    >();

    /**
     * Constructor
     */
    constructor() {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: amosDrawerComponent): void {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): amosDrawerComponent | undefined {
        return this._componentRegistry.get(name);
    }
}
