import React from 'react'
import "./timer.css"

function Timer() {

        return (
            <div className="timer">
                <div className="current_timer_bar"></div>
                <div className="spell_image"></div>
                <div className="spell_name">Incoming Spell</div>
                <div className="dbm_timer">1.5s</div>
            </div>
        )
    }

export default Timer