import React from 'react'
import Raider from './raiderComponent/RaiderComponent'
import Boss1Config from '../../../Raids/Ini-1/Boss1Config.json'

import "../../../Raids/Ini-1/ini-1.css"
import "../RaidComponent.css"

interface iRaiders {
    key: number,
    identifier: number,
    classRole: string,
    alive: boolean
}

interface iRaidFramesState {
    raidersArray: iRaiders[]
}

export default class Raidframes extends React.Component<any, iRaidFramesState> {

    public check = true

    constructor(props: any) {
        super(props)

        this.state = {
            raidersArray: []
        }
    }

    componentDidMount() {
        this.createRaiderArray()

    }


    totalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)
    createRaiderArray() {
        let Raiders: iRaiders[] = []
        for (let i = 0; i < this.totalRaiders; i++) {
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

        this.setState({
            raidersArray: Raiders
        })
    }


    render() {

        return (
            <div id="ini-1">
                {this.state.raidersArray.map(raider => (
                    <Raider key={raider.key} identifier={raider.identifier} classRole={raider.classRole} alive={raider.alive} ></Raider>
                ))}
                <div className="clearer"></div>
            </div>
        )
    }
}
// export default dungeon