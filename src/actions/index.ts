const raid = [{
    RaiderId: 0,
    classRole: "dps",
    alive: true,
    maxHp: 125,
    currentHp: 125,
    buffs: [],
    debuffs: [],
}, {
    RaiderId: 1,
    classRole: "tank",
    alive: true,
    maxHp: 250,
    currentHp: 250,
    buffs: [],
    debuffs: [],
}, {
    RaiderId: 2,
    classRole: "heal",
    alive: true,
    maxHp: 100,
    currentHp: 100,
    buffs: [],
    debuffs: [],
},]

export const setRaidAction = () => {
    return ({
        type: "SET_RAID",
        payload: {
            raid: raid
        }
    })
}

