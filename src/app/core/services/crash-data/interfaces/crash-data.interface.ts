export interface CrashData {
    gameinfo: CrashDataGameInfo[];
    times: {
        [gameId: string]: {
            [sectionId: string]: {
                [levelId: string]: CrashDataTimes;
            }
        }
    }
}

export interface CrashDataGameInfo {
    gameId: string;
    title: string;
    subtitle?: string;
    sections: CrashDataSectionInfo[];
}

export interface CrashDataSectionInfo {
    sectionId: string;
    title: string;
    levels: CrashDataLevelInfo[];
}

export interface CrashDataLevelInfo {
    levelId: string;
    title: string;
}

export interface CrashDataTimes {
    sapphire: string;
    gold: string;
    platinum: string;
    note?: string;
}
