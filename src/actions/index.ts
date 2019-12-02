import { Raider } from "../types";

export const setRaidAction = (givenRaider: Raider[]) => ({
    type: "SET_RAID",
    payload: {
        raid: givenRaider
    }
})

export const healAction = (healAmount: number, id:number) => ({
    type: "HEAL",
    payload: { healAmount, id }
})

export const damageAction = (damageAmount: number, id:number) => ({
    type: "DAMAGE",
    payload: { damageAmount, id }
})