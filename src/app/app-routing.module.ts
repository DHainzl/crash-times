import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashDataResolverService } from 'app/core/resolvers/crash-data-resolver.service';

import { RootPageComponent } from 'app/pages/root-page/root-page.component';
import { LevelSelectorComponent } from 'app/pages/level-selector/level-selector.component';
import { LevelPageComponent } from 'app/pages/level-page/level-page.component';
import { AboutPageComponent } from 'app/pages/about-page/about-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'games/crash-1',
        pathMatch: 'full',
    },
    {
        path: '',
        component: RootPageComponent,
        children: [
            {
                path: 'games',
                children: [
                    {
                        path: ':gameId',
                        component: LevelSelectorComponent,
                    },
                    {
                        path: ':gameId/:levelId',
                        component: LevelPageComponent,
                    }
                ]
            },
            {
                path: 'about',
                component: AboutPageComponent,
            }
        ],
        resolve: {
            crashData: CrashDataResolverService
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
