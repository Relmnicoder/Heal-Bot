export interface ClassRole {
    dps?: string,
    heal?: string,
    tank?: string
}

export interface Raider {
    classRole: "dps" | "tank" | "healer"
    alive: boolean,
    RaiderId: number,
    maxHp: number,
    currentHp: number,
    buffs: ((arg0: number) => number)[],
    debuffs: ((arg0: number) => number)[],
    key: number

}

export interface Spell {
    castable: boolean,
    spellName: string,
    spellId?: number
}

export interface Raid {
    Raiders?: Raider[],
    Player?: {}
}

export interface StateStore {
    spellList: Spell[]
    raiders: Raider[]
}

export interface raidReducerAction { //TODO: still scuffed
    type: string
    payload: {
        id?: number,
        damageAmount?: number,
        healAmount?: number,
        raid?: Raider[]
    }
}