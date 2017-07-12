import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/do';

import { CrashDataService } from 'app/core/services/crash-data/crash-data.service';
import { CrashData } from 'app/core/services/crash-data/interfaces/crash-data.interface';

@Injectable()
export class CrashDataResolverService implements Resolve<CrashData> {
    constructor(
        private crashDataService: CrashDataService
    ) { }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CrashData> {
        return this.crashDataService.getCrashData();
    }
}
