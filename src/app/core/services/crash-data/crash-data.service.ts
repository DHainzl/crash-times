import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CrashDataServiceInterface } from 'app/core/services/crash-data/interfaces/crash-data-service.interface';
import { CrashData } from 'app/core/services/crash-data/interfaces/crash-data.interface';


@Injectable()
export class CrashDataService implements CrashDataServiceInterface {
    constructor(
        private http: Http
    ) { }

    getCrashData(): Observable<CrashData> {
        return this.http.get('/assets/data.json')
            .map(result => result.json());
    }

}
