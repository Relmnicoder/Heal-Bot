import { combineReducers } from "redux";
import { Raider } from "../types";

const raidReducer = (raidState: Raider[] = [], action: any) => {
    switch (action.type) {
        case "SET_RAID":
            return [
                ...raidState,
                ...action.payload.raid //destructers the array of raiders that was given.
            ]
        case "DAMAGE":
            return raidState.map((raider, i) => {
                if (i === action.payload.id) {
                    return {...raider, currentHp: raider.currentHp - action.payload.damageAmount}
                }
                return raider
            })
        default:
            return raidState
    }
}

// const raidHealthReducer = (state: StateStore, action: any) => {
//     switch (action.type) {
//         case "REDUCE_HEALTH":
//             return [
//                 state.raiders[5].currentHp - 5,
//             ]
//         default:
//             return state
//     }
// }

export default combineReducers(
    {
        raiders: raidReducer
    }
)