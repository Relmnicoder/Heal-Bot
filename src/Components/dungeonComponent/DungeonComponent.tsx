import React from 'react'
import Raider from '../RaiderComponent/RaiderComponent'
import Boss1Config from '../Ini-1/Boss1Config.json'

import "../Ini-1/ini-1.css"
import "../main.css"


//This can just be the Ini component. So like classes, all Inis would use this as a basis, and just use the Config.Json file to do stuff. 

export default class Dungeon extends React.Component {

    TotalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)


    render() {
        let Raiders = []
        for (let i = 0; i < this.TotalRaiders; i++) {
            if (i < Boss1Config.raiders.total_tanks) {
                Raiders.push(
                    <Raider key={i} identifier={i.toFixed()} role={"tank"} ></Raider>
                )
            }
            else if (i < Boss1Config.raiders.total_tanks + Boss1Config.raiders.total_dps) {
                Raiders.push(
                    <Raider key={i} identifier={i.toFixed()} role={"dps"} ></Raider>
                )
            }
            else {
                Raiders.push(
                    <Raider key={i} identifier={i.toFixed()} role={"healer"} ></Raider>
                )
            }
        }
        return (
            <div id="ini-1">
                {Raiders}
            </div>
        )
    }
}
// export default dungeon