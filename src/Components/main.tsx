import React from 'react'
import Raidframes from './raidframesComponent/RaidframesComponent';
import Castbar from './castbarComponent/CastbarComponent';
import Manabar from './manabarComponent/ManabarComponent';

import "./main.css"


class HealbotSite extends React.Component {

    constructor(props:any) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="encounter">
                <div className="top-area">
                    <div className="boss-area">
                        <div className="boss b1">
                            <div className="current_life">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle-area">
                    <div className="raid-area">
                        <div className="raid">
                            <Raidframes/>
                        </div>
                    </div>
                    <div className="castbar_area">
                        <Castbar/>
                    </div>
                    <div className="manabar_area">
                        <Manabar/>
                    </div>
                </div>
                <div className="bottom-area">
                    <div className="cd_area">
                    </div>
                </div>  
            </div>
        )
    }
}

export default HealbotSite