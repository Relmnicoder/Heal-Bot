import React from 'react'
// import eliteFrame from '../../../img/eliteFrame.png'
import skull from '../../../../img/skull.png'

import "./boss.css"


interface IRaiderProps {
    identifier: string
}

function Boss(props:IRaiderProps){

    let id = "b" + props.identifier
        return (
            <div id={id} className="boss">
                {/*<img src={eliteFrame} alt="eliteFrame" className="elite_frame"></img>*/}
                <div className="current_life_text_wrapper">
                    <div className="current_life_text">100%</div>
                    {/* death display */}
                    <div className="dead">
                        <div className="dead_text"><i>DEAD</i></div>
                        <img src={skull} alt="skull"></img>
                    </div>
                </div>
                <div className="current_life_bar"></div>
            </div>

        )
    }

export default Boss