import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
} from '@angular/material'

// Components

// Pipes

// Directives

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        // NgMaterial
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCardModule,
        MdIconModule,
    ],
    declarations: [
        // Components

        // Pipes

        // Directives
    ],
    exports: [
        // Components

        // Pipes

        // Directives

        // Re-Export Common modules
        CommonModule,
        FormsModule,

        // NgMaterial
        MdButtonModule,
        MdToolbarModule,
        MdSidenavModule,
        MdCardModule,
        MdIconModule,
    ]
})
export class SharedModule {}
