import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services

// Guards

// Resolvers

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        // Services

        // Guards

        // Resolvers
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
        }
    }
}