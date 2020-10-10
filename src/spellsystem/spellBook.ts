import { CastingSpell } from './spells'


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

