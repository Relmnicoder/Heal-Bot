import React, { useEffect } from 'react'
import Boss from './boss/Boss'
import Boss1Config from '../../../raids/Ini-1/Boss1Config.json'

import "./enemies.css"
import { useSelector, useDispatch } from 'react-redux'
import { StateStore } from '../../../types'
import { damage } from '../../../actions'


function Enemies() {

    let totalBosses = Boss1Config.enemies.boss
    let Bosses = []

    for (let i = 0; i < totalBosses; i++) {
        Bosses.push(
            <Boss key={i} identifier={i.toFixed()}></Boss>
        )
    }

    const raiders = useSelector((state: StateStore) => state.raiders)
    const dispatch = useDispatch()

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