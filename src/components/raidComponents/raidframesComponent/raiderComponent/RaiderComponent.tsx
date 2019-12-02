import React from 'react'
import tank from '../../../../img/tank.png'
import dps from '../../../../img/dps.png'
import healer from '../../../../img/healer.png'
import skull from '../../../../img/skull.png'
import "./raider.css"
import { Raider } from '../../../../types';

interface RaiderArray {
    raider: Raider,
    onClick: any
}

export default function RaiderComponent(props: RaiderArray) {
    const id = "r" + props.raider.RaiderId //TODO check if i can do this differntly
    const className = "raider " + props.raider.classRole + " noselect"
    const roleIcon = props.raider.classRole + "RoleIcon"
    const damage = props.onClick


    let source: string
    if (props.raider.classRole === "tank") {
        source = tank
    }
    else if (props.raider.classRole === "dps") {
        source = dps
    }
    else {
        source = healer
    }

    return (
        <div id={id} className={className} onClick={()=>damage(props.raider.RaiderId)} >
            <img className={roleIcon} src={source} alt={props.raider.classRole}></img>
            <div className="current_life_text_wrapper">
                {
                    props.raider.alive ?
                        <div className="current_life_text">{props.raider.currentHp}</div>
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