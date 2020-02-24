import { Spell } from "../types";

export const setSpellList = (spells: Spell[]) => ({
    type: "SET_SPELLLIST",
    payload: {
        spellList: spells
    }
})

export const casted = (id:number) => ({
    type: "CAST",
    payload: {
        spellID: id,
    }
})
