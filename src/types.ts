export interface ClassRole {
    dps?: string,
    heal?: string,
    tank?: string
}

export interface Raider {
    classRole: "dps" | "tank" | "heal"
    alive: boolean,
    RaiderId: number,
    maxHp: number,
    currentHp: number,
    buffs: ((arg0: number) => number)[],
    debuffs: ((arg0: number) => number)[],
    key: number

}

export interface Raid {
    Raiders: Raider[],
    Spells: []
    Player: {}
}

export interface StateStore {
    raiders: Raider[]
}