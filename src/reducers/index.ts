import { combineReducers } from "redux";

const raidReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case "SET_RAID":
            return [
                ...state,
                action.payload.raid
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