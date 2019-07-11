import React from 'react'
import Ini1 from "./Ini-1/Ini-1";
import Boss1Config from './Ini-1/Boss1Config.json'


class HealbotSite extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    TotalRaiders = Object.values(Boss1Config.raiders).reduce((a, b) => a + b)

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

                        <Ini1></Ini1>
                        {this.TotalRaiders}

                        <div className="clearer">
                        </div>
                    </div>
                </div>
                <div className="manabar_area">
                    <div className="manabar">
                    </div>
                </div>
                <div className="castbar_area">
                    <div className="castbar">
                    </div>
                </div>
                <div className="cd_area">
                </div>
            </div>

        )
    }
}

export default HealbotSite