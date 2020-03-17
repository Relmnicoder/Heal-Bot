// import { useDispatch } from "react-redux"
import { heal } from "../../../../actions/raidActions"
import { spellCast, spellBuff, removeBuff } from "../../../../actions/spellActions"
import { store } from "../../../.."
export class SpellBook {

    public flashHeal = (targetId: number) => {
        let basicHeal = new CastingSpell(1, 20, 1500)
        return basicHeal.heal(targetId)
    }

    public basicHot = (targetId: number) => {
        let spellId = 1
        let healAmount = 5


        store.dispatch(spellBuff(spellId, targetId))

        let interval = setInterval(() => {
            store.dispatch(heal(healAmount, targetId))
        }, 1000)

        setTimeout(() => {
            clearInterval(interval)
            store.dispatch(removeBuff(spellId, targetId))
        }, 5000)
    }

}

export class CastingSpell {
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
}