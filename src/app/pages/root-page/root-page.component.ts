import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CrashData, CrashDataGameInfo } from 'app/core/services/crash-data/interfaces/crash-data.interface';


@Component({
    selector: 'app-root-page',
    templateUrl: './root-page.component.html',
    styleUrls: [ './root-page.component.scss' ]
})
export class RootPageComponent implements OnInit {
    games: CrashDataGameInfo[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        const crashData: CrashData = this.route.snapshot.data['crashData'];
        this.games = crashData.gameinfo;
    }

    navigateTo(gameId: string) {
        this.router.navigate(['games', gameId]);
    }
}
