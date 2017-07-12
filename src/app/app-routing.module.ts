import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashDataResolverService } from 'app/core/resolvers/crash-data-resolver.service';

import { GameSelectorComponent } from 'app/pages/game-selector/game-selector.component';
import { LevelSelectorComponent } from 'app/pages/level-selector/level-selector.component';
import { LevelPageComponent } from 'app/pages/level-page/level-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GameSelectorComponent,
            },
            {
                path: ':gameId',
                component: LevelSelectorComponent,
            },
            {
                path: ':gameId/:levelId',
                component: LevelPageComponent,
            }
        ],
        resolve: {
            crashData: CrashDataResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
