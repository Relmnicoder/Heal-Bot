import { Spell } from "../types";

export const setSpellList = (spells: Spell[]) => ({
    type: "SET_SPELLLIST",
    payload: {
        spellList: spells
    }
})

export const spellCast = (id: number) => ({
    type: "CAST",
    payload: {
        spellID: id,
    }
})

export const spellBuff = (spellId: number, targetId: number) => ({
    type: "BUFF",
    payload: {
        buff: spellId,
        id: targetId
    }
})

export const removeBuff = (spellId: number, targetId: number) => ({
    type: "REMOVE_BUFF",
    payload: {
        buff: spellId,
        id: targetId
    }
})