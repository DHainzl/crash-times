import { CrashData } from './interfaces/crash-data.interface';

const mockData: CrashData = {
    gameinfo: [
        {
            gameId: 'crash-test',
            title: 'Crash Test',
            subtitle: 'Some test data',
            sections: [
                {
                    sectionId: 'warp-1',
                    title: 'Warp Room 1',
                    levels: [
                        {
                            levelId: 'test-level',
                            title: 'Test Level',
                        }
                    ]
                },
                {
                    sectionId: 'warp-2',
                    title: 'Warp Room 2',
                    levels: [
                        {
                            levelId: 'test-level-2',
                            title: 'Test Level 2',
                        }
                    ]
                },
                {
                    sectionId: 'warp-3',
                    title: 'Warp Room 3',
                    levels: [
                        {
                            levelId: 'test-level-3',
                            title: 'Test Level 3',
                        }
                    ]
                }
            ]
        }
    ],
    times: {
        'crash-test': {
            'warp-1': {
                'test-level': {
                    sapphire: 'Sapphire Time',
                    gold: 'Gold Time',
                    platinum: 'Platinum Time',
                    note: 'Some test',
                }
            },
            'warp-2': {
                'test-level-2': {
                    sapphire: 'Sapphire Time',
                    gold: 'Gold Time',
                    platinum: 'Platinum Time',
                    note: 'Some test',
                }
            },
            'warp-3': {
                'test-level-3': {
                    sapphire: 'Sapphire Time',
                    gold: 'Gold Time',
                    platinum: 'Platinum Time',
                    note: 'Some test',
                }
            }
        }
    }
}

export {
    mockData
};
