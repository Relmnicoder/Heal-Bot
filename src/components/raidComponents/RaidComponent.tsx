import React, { useEffect } from 'react'
import Raidframes from './raidframesComponent/RaidframesComponent';
import Enemies from './enemiesComponent/EnemiesComponent';
import Castbar from './castbarComponent/CastbarComponent';
import Manabar from './manabarComponent/ManabarComponent';
import Timers from './timerComponent/TimerComponent';
import Cooldowns from './cooldownsComponent/CooldownsComponent';

import "./RaidComponent.css";

// import { Spell1 } from './SpellComponents/SpellComponent';

export default function RaidComponent() {

    useEffect(() => {
        document.title = "Raid" // turns the tab to this name. using the browser api
    })

    return (
        <div className="encounter">
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
                </div>
                <div className="castbar_area">
                    <Castbar />
                </div>
                <div className="manabar_area">
                    <Manabar />
                </div>
                <div className="timer_area">
                    <Timers />
                </div>
            </div>
            <div className="bottom-area">
                <div className="cd_area">
                    <Cooldowns />
                </div>
            </div>
            {/* <button onClick={Spell1}></button> */}
        </div>
    )
}