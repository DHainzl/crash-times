import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CrashData, CrashDataGameInfo } from 'app/core/services/crash-data/interfaces/crash-data.interface';

@Component({
    selector: 'app-level-selector',
    templateUrl: './level-selector.component.html',
    styleUrls: [ './level-selector.component.scss' ]
})
export class LevelSelectorComponent implements OnInit {
    private gameId: string;
    private game: CrashDataGameInfo;

    error: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.gameId = params['gameId'];
            this.loadGameData();
        });
    }

    loadGameData() {
        const crashData: CrashData = this.route.snapshot.data['crashData'];
        const game = crashData.gameinfo.find(gameinfo => gameinfo.gameId === this.gameId);

        if (game === undefined) {
            this.error = 'Cannot find game with id ' + this.gameId;
            return;
        }
        this.game = game;
    }

    navigateTo(levelId: string) {
        this.router.navigate([this.gameId, levelId]);
    }
}
