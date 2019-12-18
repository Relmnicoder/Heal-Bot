import React from 'react'
import Spell from './spellComponent/Spell'
import "./cooldowns.css"

function Cooldowns() {

    const totalSpells = 10
    // count number of spells
    let Spells = []

    for (let i = 0; i < totalSpells; i++) {
        Spells.push(
            <Spell key={i} identifier={i.toFixed()}></Spell>
        )
    }

    return (
        <div className="cooldowns noselect">
            {Spells}
        </div>
    )
}

export default Cooldowns