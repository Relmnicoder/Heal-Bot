import { combineReducers } from "redux";
import { StateStore } from "../types";

const raidReducer = (state: any = [], action: any) => {
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

export default combineReducers(
    {
        raiders: raidReducer
    }
)