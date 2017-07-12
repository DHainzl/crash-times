import { CrashData } from 'app/core/services/crash-data/interfaces/crash-data.interface';

import { Observable } from 'rxjs/Observable';

export interface CrashDataServiceInterface {
    getCrashData(): Observable<CrashData>;
}
