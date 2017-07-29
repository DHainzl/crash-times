import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrashData, CrashDataGameInfo } from 'app/core/services/crash-data/interfaces/crash-data.interface';

@Component({
    selector: 'app-level-selector',
    templateUrl: './level-selector.component.html',
    styleUrls: [ './level-selector.component.scss' ]
})
export class LevelSelectorComponent implements OnInit {
    gameId: string;
    game: CrashDataGameInfo;

    error = '';

    constructor(
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.gameId = params['gameId'];
            this.loadGameData();
        });
    }

    loadGameData() {
        const crashData: CrashData = this.route.parent.parent.snapshot.data['crashData'];
        const game = crashData.gameinfo.find(gameinfo => gameinfo.gameId === this.gameId);

        if (game === undefined) {
            this.game = undefined;
            this.error = 'Cannot find game with id ' + this.gameId;
        } else {
            this.game = game;
            this.error = '';
        }
    }
}
