import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LevelSelectorComponent } from './level-selector.component';

import { mockData as crashData } from '../../core/services/crash-data/crash-data.mock';

describe('LevelSelectorComponent', () => {
    const paramsSubject = new BehaviorSubject<any>({
        gameId: 'crash-test',
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: paramsSubject,
                        parent: { parent: {
                            snapshot: {
                                data: {
                                    crashData
                                }
                            }
                        } }
                    }
                }
            ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [
                    LevelSelectorComponent
            ],
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(LevelSelectorComponent);
        const app = fixture.debugElement.componentInstance;

        fixture.detectChanges();

        expect(app).toBeTruthy();
    }));

    it('should handle errors correctly', async(() => {
        const fixture = TestBed.createComponent(LevelSelectorComponent);

        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.game).not.toBeUndefined();
        expect(fixture.componentInstance.error).toBe('');

        paramsSubject.next({ gameId: 'crash-foo' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-foo');
        expect(fixture.componentInstance.game).toBeUndefined();
        expect(fixture.componentInstance.error).not.toBe('');

        paramsSubject.next({ gameId: 'crash-test' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.game).not.toBeUndefined();
        expect(fixture.componentInstance.error).toBe('');
    }));
});
