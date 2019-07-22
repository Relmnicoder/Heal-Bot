import React from 'react'
import tank from '../../../../img/tank.png'
import dps from '../../../../img/dps.png'
import healer from '../../../../img/healer.png'
import skull from '../../../../img/skull.png'
import "./raider.css"

// import { RaidContext } from '../../RaidStore'

interface IRaiderProps {
    identifier: number,
    classRole: string,
    alive: boolean
}



export default function Raider(props: IRaiderProps) {
    const id = "r" + props.identifier //TODO check if i can do this differntly
    const className = "raider " + props.classRole
    const roleIcon = props.classRole + "RoleIcon"

    let source: string
    if (props.classRole === "tank") {
        source = tank
    }
    else if (props.classRole === "dps") {
        source = dps
    }
    else {
        source = healer
    }

    return (
        <div id={id} className={className} >
            <img className={roleIcon} src={source} alt={props.classRole}></img>
            <div className="current_life_text_wrapper">
                {
                    props.alive ?
                        <div className="current_life_text">100</div>
                        :
                        <div className="dead">
                            <div className="dead_text"><i>DEAD</i></div>
                            <img src={skull} alt="skull"></img>
                        </div>
                }
            </div>
            <div className="current_life_bar"></div>
            <div className="incoming_heal"></div>
        </div>

    )
}