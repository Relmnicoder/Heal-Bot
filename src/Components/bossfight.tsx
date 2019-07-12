import React from 'react'
import Raidframes from './raidframesComponent/RaidframesComponent';
import Castbar from './castbarComponent/CastbarComponent';

import "./main.css"


class BossfightSite extends React.Component {

    constructor(props:any) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="boss1">
                <div className="boss-area">
                    <div className="boss b1">
                        <div className="current_life">
                        </div>
                    </div>
                </div>
                <div className="raid-area">
                    <div className="raid">

                        <Raidframes/>

                        <div className="clearer">
                        </div>
                    </div>
                </div>
                <div className="manabar_area">
                    <div className="manabar">
                    </div>
                </div>
                <div className="castbar_area">
                    <Castbar/>
                    <div className="castbar">
                    </div>
                </div>
                <div className="cd_area">
                </div>
            </div>

        )
    }
}

export default BossfightSite