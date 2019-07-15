import React from 'react'
import Raidframes from './raidframesComponent/RaidframesComponent';
import Enemies from './enemiesComponent/EnemiesComponent';
import Castbar from './castbarComponent/CastbarComponent';
import Manabar from './manabarComponent/ManabarComponent';

import "./InstanceComponent.css"


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
                        <Enemies/>
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