import React, { useEffect } from 'react'
import Boss from './boss/Boss'
import Boss1Config from '../../../raids/Ini-1/Boss1Config.json'

import "./enemies.css"
import { useDispatch } from 'react-redux'
import { damage } from '../../../actions'
import { Raider } from '../../../types'


interface enemyProps {
    raiders: Raider[]
}

const Enemies: React.FC<enemyProps> = props => {
    const dispatch = useDispatch()

    let totalBosses = Boss1Config.enemies.boss
    let Bosses = []

    for (let i = 0; i < totalBosses; i++) {
        Bosses.push(
            <Boss key={i} identifier={i.toFixed()}></Boss>
        )
    }

    let LiveRaiders = props.raiders.map(raider => {
        if (raider.alive)
            return raider.RaiderId
        return
    });
    console.log(LiveRaiders)

    let fightStart = () => dispatch(damage(35, Math.floor(Math.random() * 10)))

    useEffect(() => {
        const interval = setInterval(() => {
            fightStart()
        }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="bosses noselect">
            {Bosses}
            <div className="clearer"></div>
        </div>
    )
}

export default Enemies;