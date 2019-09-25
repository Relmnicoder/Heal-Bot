import { combineReducers } from "redux";
import { StateStore } from "../types";

const raidReducer = (state: any = [], action: any, raiderID?: number) => {
    switch (action.type) {
        case "SET_RAID":
            return [
                ...state,
                ...action.payload.raid //destructers the array of raiders that was given.
            ]

        default:
            return state
    }
}

const raidHealthReducer = (state: StateStore, action: any) => {
    switch (action.type) {
        case "REDUCE_HEALTH":
            return [
                state.raiders[5].currentHp - 5,
            ]
        default:
            return state
    }
}

export default combineReducers(
    {
        raiders: raidReducer
    }
)