import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';

import { CrashDataServiceInterface } from 'app/core/services/crash-data/interfaces/crash-data-service.interface';
import { CrashData } from 'app/core/services/crash-data/interfaces/crash-data.interface';
import { mockData as crashMockData } from './crash-data.mock';

@Injectable()
export class CrashDataService implements CrashDataServiceInterface {
    shouldSucceed = true;

    configure(shouldSucceed: boolean) {
        this.shouldSucceed = shouldSucceed;
    }
    getCrashData(): Observable<CrashData> {
        if (this.shouldSucceed) {
            return Observable.of(crashMockData)
                .delay(0);
        } else {
            return Observable.throw('Could not get data ...')
                .delay(0);
        }
    }

}
