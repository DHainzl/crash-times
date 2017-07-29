import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LevelPageComponent } from './level-page.component';

import { mockData as crashData } from '../../core/services/crash-data/crash-data.mock';

describe('LevelPageComponent', () => {
    const paramsSubject = new BehaviorSubject<any>({
        gameId: 'crash-test',
        levelId: 'test-level'
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
                    LevelPageComponent
            ],
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        const app = fixture.debugElement.componentInstance;

        fixture.detectChanges();

        expect(app).toBeTruthy();
    }));

    it('should be initialized correctly', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.levelId).toBe('test-level');
        expect(fixture.componentInstance.game).not.toBeUndefined();
        expect(fixture.componentInstance.section).not.toBeUndefined();
        expect(fixture.componentInstance.level).not.toBeUndefined();
        expect(fixture.componentInstance.previousLevel).toBeUndefined();
        expect(fixture.componentInstance.nextLevel).not.toBeUndefined();
        expect(fixture.componentInstance.times).not.toBeUndefined();
        expect(fixture.componentInstance.error).toBe('');
    }));

    it('should handle the middle level correctly', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        fixture.detectChanges();
        paramsSubject.next({ gameId: 'crash-test', levelId: 'test-level-2' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.levelId).toBe('test-level-2');
        expect(fixture.componentInstance.game).not.toBeUndefined();
        expect(fixture.componentInstance.section).not.toBeUndefined();
        expect(fixture.componentInstance.level).not.toBeUndefined();
        expect(fixture.componentInstance.previousLevel).not.toBeUndefined();
        expect(fixture.componentInstance.nextLevel).not.toBeUndefined();
        expect(fixture.componentInstance.times).not.toBeUndefined();
        expect(fixture.componentInstance.error).toBe('');
    }));

    it('should handle the last level correctly', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        fixture.detectChanges();
        paramsSubject.next({ gameId: 'crash-test', levelId: 'test-level-3' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.levelId).toBe('test-level-3');
        expect(fixture.componentInstance.game).not.toBeUndefined();
        expect(fixture.componentInstance.section).not.toBeUndefined();
        expect(fixture.componentInstance.level).not.toBeUndefined();
        expect(fixture.componentInstance.previousLevel).not.toBeUndefined();
        expect(fixture.componentInstance.nextLevel).toBeUndefined();
        expect(fixture.componentInstance.times).not.toBeUndefined();
        expect(fixture.componentInstance.error).toBe('');
    }));

    it('should handle a non-existing game correctly', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        fixture.detectChanges();
        paramsSubject.next({ gameId: 'crash-foo', levelId: 'test-level' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-foo');
        expect(fixture.componentInstance.levelId).toBe('test-level');
        expect(fixture.componentInstance.game).toBeUndefined();
        expect(fixture.componentInstance.section).toBeUndefined();
        expect(fixture.componentInstance.level).toBeUndefined();
        expect(fixture.componentInstance.previousLevel).toBeUndefined();
        expect(fixture.componentInstance.nextLevel).toBeUndefined();
        expect(fixture.componentInstance.times).toBeUndefined();
        expect(fixture.componentInstance.error).not.toBe('');
    }));

    it('should handle a non-existing level correctly', async(() => {
        const fixture = TestBed.createComponent(LevelPageComponent);
        fixture.detectChanges();
        paramsSubject.next({ gameId: 'crash-test', levelId: 'foo-level' });
        fixture.detectChanges();

        expect(fixture.componentInstance.gameId).toBe('crash-test');
        expect(fixture.componentInstance.levelId).toBe('foo-level');
        expect(fixture.componentInstance.game).toBeUndefined();
        expect(fixture.componentInstance.section).toBeUndefined();
        expect(fixture.componentInstance.level).toBeUndefined();
        expect(fixture.componentInstance.previousLevel).toBeUndefined();
        expect(fixture.componentInstance.nextLevel).toBeUndefined();
        expect(fixture.componentInstance.times).toBeUndefined();
        expect(fixture.componentInstance.error).not.toBe('');
    }));
});
