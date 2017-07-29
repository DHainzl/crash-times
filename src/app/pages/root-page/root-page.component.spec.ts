import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RootPageComponent } from './root-page.component';

import { mockData as crashData } from '../../core/services/crash-data/crash-data.mock';

describe('RootComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            data: {
                                crashData
                            }
                        }
                    }
                }
            ],
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [
                RootPageComponent
            ],
        }).compileComponents();
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(RootPageComponent);
        const app = fixture.debugElement.componentInstance;

        fixture.detectChanges();

        expect(app).toBeTruthy();
    }));

    it('should list all the games in the navigation', async(() => {
        const fixture = TestBed.createComponent(RootPageComponent);
        fixture.detectChanges();

        const lis = fixture.debugElement.queryAll(By.css('.page-content nav > ul > li'));
        expect(lis.length).toBe(1);

        const title = lis[0].query(By.css('.game-title')).nativeElement;
        const subtitle = lis[0].query(By.css('.game-subtitle')).nativeElement;

        expect(title.textContent).toBe('Crash Test');
        expect(subtitle.textContent).toBe('Some test data')
    }));
});
