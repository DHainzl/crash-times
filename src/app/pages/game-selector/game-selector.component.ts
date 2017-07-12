import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CrashData, CrashDataGameInfo } from 'app/core/services/crash-data/interfaces/crash-data.interface';


@Component({
    selector: 'app-game-selector',
    templateUrl: './game-selector.component.html',
    styleUrls: [ './game-selector.component.scss' ]
})
export class GameSelectorComponent implements OnInit {
    private games: CrashDataGameInfo[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        const crashData: CrashData = this.route.snapshot.data['crashData'];
        this.games = crashData.gameinfo;
    }

    navigateTo(gameId: string) {
        this.router.navigate([gameId]);
    }
}
