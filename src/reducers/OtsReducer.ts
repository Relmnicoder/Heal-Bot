import { Spell } from "../types";

type OtSpell = {
    spellId: number,
    target: number,

}

export const OtSystemReducer = (overTimeSet:OtSpell[] = [], action:any) => {
    switch (action.type) {
        case "BUFF":
            return [...overTimeSet, action.payload];
        default:
            return overTimeSet;
    }
};
