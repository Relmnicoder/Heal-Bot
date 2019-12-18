import { Raider } from "../types";

export const setRaid = (givenRaider: Raider[]) => ({
    type: "SET_RAID",
    payload: {
        raid: givenRaider
    }
})

export const heal = (healAmount: number, id:number) => ({
    type: "HEAL",
    payload: { healAmount, id }
})

export const damage = (damageAmount: number, id:number) => ({
    type: "DAMAGE",
    payload: { damageAmount, id }
})