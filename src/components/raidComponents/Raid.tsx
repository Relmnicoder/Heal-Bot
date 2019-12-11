import React, { useEffect } from 'react'
import Raidframes from './raidframes/Raidframes';
import Enemies from './enemies/Enemies';
import Castbar from './castbar/CastbarComponent';
import Manabar from './manabar/Manabar';
import Timers from './timerComponent/TimerComponent';
import Cooldowns from './cooldowns/Cooldowns';

import "./Raid.css";

// import { Spell1 } from './SpellComponents/SpellComponent';

export default function Raid() {

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