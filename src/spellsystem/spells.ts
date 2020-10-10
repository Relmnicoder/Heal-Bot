// import { useDispatch } from "react-redux"
import { heal } from "../actions/raidActions"
import { spellCast, spellBuff, removeBuff } from "../actions/spellActions"
import { store } from ".."

export class SpellBook {

    public flashHeal = (targetId: number) => {
        let Heal = new CastingSpell(1, 20, 1500);
        return Heal.heal(targetId);
    }

    public basicHot = (targetId: number) => {
        const Heal = new CastingSpell(2, 20, 0);
        return Heal.hot(targetId, 1500)
    }

}

class CastingSpell {
    spellId: number;
    amount: number;
    castTime: number;
    constructor(
        spellId: number,
        amount: number,
        castTime: number
    ) {
        this.spellId = spellId;
        this.amount = amount;
        this.castTime = castTime
    }
    heal(targetId: number) {
        setTimeout(() => {
            store.dispatch(heal(5, targetId))
        }, this.castTime)
    }
    hot(targetId: number, duration: number) {

        setTimeout(() => {
            store.dispatch(spellBuff(this.spellId, duration, targetId))
        }, this.castTime)
    }
}
