import { combineReducers } from "redux";
import { Raider, raidReducerAction } from "../types";

const raidReducer = (raidState: Raider[] = [], action: any) => {
    switch (action.type) {
        case "SET_RAID":
            return [
                ...action.payload.raid //destructers the array of raiders that was given.
            ]
        case "DAMAGE":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) {
                    if (raider.currentHp - action.payload.damageAmount < 0)
                        return {...raider, currentHp: 0, alive: false}
                    return { ...raider, currentHp: raider.currentHp - action.payload.damageAmount }
                }
                return raider
            })
        case "HEAL":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) { //TODO check if i can make it so that the reducer isnt called when nothing changes (eg: currentHp === maxHp)
                    if (raider.currentHp + action.payload.healAmount > raider.maxHp)
                        return {...raider, currentHp: raider.maxHp}
                    return { ...raider, currentHp: raider.currentHp + action.payload.healAmount }
                }
                return raider
            })
        case "BUFF":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) {
                    return { ...raider, buffs: [...raider.buffs, action.payload.buff] }
                }
                return raider
            })
        case "DEBUFF":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) {
                    return { ...raider, debuffs: [...raider.debuffs, action.payload.debuff] }
                }
                return raider
            })

        case "TOGGLE_LIFE":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) {
                    return { ...raider, alive: !raider.alive }
                }
                return raider
            })

        /*TODO: Check if i can somehow make:
         return raidState.map((raider, i) => {
            if (i === action.payload.id) {}
          }
        go away since its tedious and sort of dumb.  */
        default:
            return raidState
    }
}

export default combineReducers(
    {
        raiders: raidReducer
    }
)