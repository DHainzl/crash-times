import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { CrashData, CrashDataGameInfo } from 'app/core/services/crash-data/interfaces/crash-data.interface';


@Component({
    selector: 'app-root-page',
    templateUrl: './root-page.component.html',
    styleUrls: [ './root-page.component.scss' ]
})
export class RootPageComponent implements OnInit {
    games: CrashDataGameInfo[] = [];

    navMode = 'side';
    navOpen = true;
    @ViewChild('sidenav') sidenav: MdSidenav;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        const crashData: CrashData = this.route.snapshot.data['crashData'];
        this.games = crashData.gameinfo;

        if (window.innerWidth < 768) {
            this.navMode = 'over';
            setTimeout(() => {
                this.sidenav.close();
            }, 0);
        }
    }

    closeSidebar() {
        if (this.navMode === 'over') {
            this.sidenav.close();
        }
    }

    showSidebar() {
        this.sidenav.open();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.navMode = 'over';
            this.sidenav.close();
        }
        if (event.target.innerWidth >= 768) {
           this.navMode = 'side';
           this.sidenav.open();
        }
    }
}
