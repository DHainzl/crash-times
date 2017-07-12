import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameSelectorComponent } from 'app/pages/game-selector/game-selector.component';
import { LevelSelectorComponent } from 'app/pages/level-selector/level-selector.component';
import { LevelPageComponent } from 'app/pages/level-page/level-page.component';

@NgModule({
    declarations: [
        AppComponent,
        GameSelectorComponent,
        LevelSelectorComponent,
        LevelPageComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        SharedModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
