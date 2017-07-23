import { RouterModule } from '@angular/router';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { CrashDataService } from 'app/core/services/crash-data/crash-data.service';

// Guards

// Resolvers
import { CrashDataResolverService } from 'app/core/resolvers/crash-data-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        // Services
        CrashDataService,

        // Guards

        // Resolvers
        CrashDataResolverService,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
        }
    }
}
