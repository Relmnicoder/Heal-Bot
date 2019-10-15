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
            {/* <button onClick={Spell1}></button> */}
        </div>
    )
}