import React from 'react'
import spell0 from '../../../../img/spell1.gif'
import spell1 from '../../../../img/spell2.gif'
import spell2 from '../../../../img/spell3.gif'
import spell3 from '../../../../img/spell4.gif'
import spell4 from '../../../../img/spell5.gif'
import spell5 from '../../../../img/spell6.gif'
import spell6 from '../../../../img/spell7.gif'
import spell7 from '../../../../img/spell8.gif'
import spell8 from '../../../../img/spell9.gif'
import spell9 from '../../../../img/spell10.gif'

import "./spell.css"


interface IRaiderProps {
    identifier: string
}

class Spell extends React.Component<IRaiderProps, any> {

    spellSrc = "spell" + this.props.identifier
    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div className="cd">
                <img className="" src={this.spellSrc} alt="spell alt text"></img>
                <div className="cd_text_wrapper">
                        <p>15s</p>
                </div>
            </div>
        )
    }
}

export default Spell