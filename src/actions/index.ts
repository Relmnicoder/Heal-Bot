import { Raider } from "../types";

export const setRaidAction = (givenRaider: Raider[]) => {
    return ({
        type: "SET_RAID",
        payload: {
            raid: givenRaider
        }
    })
}

export const healAction = (healAmount: number) => {
    return ({
        type: "HEAL",
        payload: healAmount
    })
}

export const damageAction = (damageAmount: number) => {
    return ({
        type: "DAMAGE",
        payload: damageAmount
    })
}