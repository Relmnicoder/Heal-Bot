import { Raider } from "../types";

export const setRaidAction = (givenRaider: Raider[]) => {
    return ({
        type: "SET_RAID",
        payload: {
            raid: givenRaider
        }
    })
}

