import React from 'react'
import Spell from './spellComponent/SpellComponent'
import "./cooldowns.css"

class Cooldowns extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    totalSpells = 10

    render() {

        // count number of spells
        let Spells = []

        for (let i = 0; i < this.totalSpells; i++) {
            Spells.push(
                <Spell key={i} identifier={i.toFixed()}></Spell>
            )
        }

        return (
            <div className="cooldowns">
                 {Spells}
            </div>
        )
    }
}

export default Cooldowns