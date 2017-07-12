import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
    CrashData,
    CrashDataGameInfo,
    CrashDataLevelInfo,
    CrashDataSectionInfo,
    CrashDataTimes
} from 'app/core/services/crash-data/interfaces/crash-data.interface';

@Component({
    selector: 'app-level-page',
    templateUrl: './level-page.component.html',
    styleUrls: [ './level-page.component.scss' ]
})
export class LevelPageComponent implements OnInit {
    private gameId: string;
    private levelId: string;
    game: CrashDataGameInfo;
    section: CrashDataSectionInfo;
    level: CrashDataLevelInfo;
    previousLevel: CrashDataLevelInfo;
    nextLevel: CrashDataLevelInfo;
    times: CrashDataTimes;

    error: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.gameId = params['gameId'];
            this.levelId = params['levelId'];

            this.game = undefined;
            this.section = undefined;
            this.level = undefined;
            this.previousLevel = undefined;
            this.nextLevel = undefined;
            this.times = undefined;

            this.loadGameData();
        });
    }

    loadGameData() {
        this.level = undefined;
        const crashData: CrashData = this.route.snapshot.data['crashData'];
        const game = crashData.gameinfo.find(gameinfo => gameinfo.gameId === this.gameId);

        if (game === undefined) {
            this.error = 'Cannot find game with id ' + this.gameId;
            return;
        }

        game.sections.forEach((section, idx) => {
            const level = section.levels.find(levelInfo => levelInfo.levelId === this.levelId);
            if (level !== undefined) {
                this.section = section;
                this.level = level;
            }
        });

        this.determinePreviousAndNextLevels(game);

        if (this.level === undefined) {
            this.error = 'Cannot find level with id ' + this.levelId + ' in game ' + game.title;
        }

        this.game = game;
        this.times = crashData.times[this.game.gameId][this.section.sectionId][this.level.levelId];
    }

    private flatten<T>(arr: T[][]): T[] {
        return arr.reduce((a, b) => a.concat(b), []);
    }

    private determinePreviousAndNextLevels(game: CrashDataGameInfo) {
        const allLevels = this.flatten(game.sections.map(section => section.levels));
        const levelIdx = allLevels.findIndex(levelInfo => levelInfo.levelId === this.levelId);

        if (levelIdx !== 0) {
            this.previousLevel = allLevels[levelIdx - 1];
        }
        if (levelIdx !== allLevels.length - 1) {
            this.nextLevel = allLevels[levelIdx + 1];
        }
    }
}
