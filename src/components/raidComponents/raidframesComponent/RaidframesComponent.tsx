import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setRaidAction } from '../../../actions/index'

import Raider from './raiderComponent/RaiderComponent'
import Boss1Config from '../../../raids/Ini-1/Boss1Config.json'

import "../../../raids/Ini-1/ini-1.css"
import "../RaidComponent.css"

interface iRaiders {
    key: number,
    identifier: number,
    classRole: string,
    alive: boolean
}

function Raiders() {

}

export default function Raidframes() {


    const raiders = useSelector((state: any) => state)
    const dispatch = useDispatch()

    useEffect(() => { dispatch((setRaidAction())) }, [dispatch])

    console.log(raiders)


    let totalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)
    let Raiders: iRaiders[] = []
    for (let i = 0; i < totalRaiders; i++) {
        if (i < Boss1Config.raiders.total_tanks) {
            Raiders.push({
                key: i,
                identifier: i,
                classRole: "tank",
                alive: true
            })
        }
        else if (i < Boss1Config.raiders.total_tanks + Boss1Config.raiders.total_dps) {
            Raiders.push({
                key: i,
                identifier: i,
                classRole: "dps",
                alive: true
            })
        }
        else {
            Raiders.push({
                key: i,
                identifier: i,
                classRole: "healer",
                alive: true
            })
        }
    }

    return (
        <div id="ini-1">
            {/* {this.state.raidersArray.map(raider => (
                    <Raider key={raider.key} identifier={raider.identifier} classRole={raider.classRole} alive={raider.alive} ></Raider>
                ))} */}
        </div>
    )
}
// export default dungeon