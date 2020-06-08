import { Spell } from "../types";

export const spellReducer = (spellList: Spell[] = [], action: any) => {
  switch (action.type) {
    case "SET_SPELLLIST":
      return [...action.payload.spellList];
    case "CAST":
      return spellList.map((singleSpell: Spell) => {
        return { ...singleSpell };
      });
    default:
      return spellList;
  }
};
