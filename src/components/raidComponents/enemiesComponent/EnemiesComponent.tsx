import React from 'react'
import Boss from './bossComponent/BossComponent'
import Boss1Config from '../../../raids/Ini-1/Boss1Config.json'

import "./enemies.css"


class Enemies extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    totalBosses = Boss1Config.enemies.boss

    render() {
        // count number of enemies
        let Bosses = []

        for (let i = 0; i < this.totalBosses; i++) {
            Bosses.push(
                <Boss key={i} identifier={i.toFixed()}></Boss>
            )
        }

        return (
            <div className="bosses">
                {Bosses}
                <div className="clearer"></div>
            </div>
        )
    }
}

export default Enemies