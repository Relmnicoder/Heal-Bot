import React from 'react'

import "./spell.css"



function Spell(props: any) {

    let spellSrc = parseInt(props.identifier) + 1
    return (
        <div className="cd">
            <img className="" src={require("../../../../img/spell" + spellSrc + ".gif")} alt="spell alt text"></img>
            <div className="cd_text_wrapper">
                <p>15s</p>
            </div>
        </div>
    )
}

export default Spell