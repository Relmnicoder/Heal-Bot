import React, { useEffect } from 'react'
import Raidframes from './raidframes/Raidframes';
import Enemies from './enemyComponents/Enemies';
import Castbar from './playerComponents/castbar/CastbarComponent';
import Manabar from './playerComponents/manabar/Manabar';
import Timers from './timerComponent/TimerComponent';
import Cooldowns from './playerComponents/cooldowns/Cooldowns';
import RaidInit from "./gameComponents/RaidInit";

import Boss1Config from '../../raids/Ini-1/Boss1Config.json'
import { Raider, StateStore } from "../../types"
import { setRaid } from '../../actions/index'



import "./Raid.css";
import { useDispatch } from 'react-redux';

// import { Spell1 } from './SpellComponents/SpellComponent';

export default function Raid() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(setRaid(Raiders())) }, [dispatch])
    useEffect(() => {
        document.title = "Raid" // turns the tab to this name. using the browser api
    })



    return (
        <div className="encounter">
            <RaidInit />
            <div className="top-area">
                <div className="boss-area">
                    <Enemies />
                </div>
            </div>
            <div className="middle-area">
                <div className="raid-area">
                    <div className="raid">
                        <Raidframes />
                    </div>
                    <div className="timer-area">
                        <Timers />
                    </div>
                    <div className="clearer"></div>
                </div>
                <div className="castbar-area">
                    <Castbar />
                </div>
                <div className="manabar-area">
                    <Manabar />
                </div>
            </div>
            <div className="bottom-area">
                <div className="cd-area">
                    <Cooldowns />
                </div>
            </div>
        </div>
    )
}

function Raiders() {
    let totalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)
    let Raiders: Raider[] = []
    for (let i = 0; i < totalRaiders; i++) {
        if (i < Boss1Config.raiders.total_tanks) {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "tank",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.tankHp,
                currentHp: Boss1Config.raiderConfig.tankHp
            })
        }
        else if (i < Boss1Config.raiders.total_tanks + Boss1Config.raiders.total_dps) {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "dps",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.dpsHp,
                currentHp: Boss1Config.raiderConfig.dpsHp
            })
        }
        else {
            Raiders.push({
                key: i,
                RaiderId: i,
                classRole: "healer",
                alive: true,
                buffs: [],
                debuffs: [],
                maxHp: Boss1Config.raiderConfig.healHp,
                currentHp: Boss1Config.raiderConfig.healHp
            })
        }
    }
    return Raiders
}