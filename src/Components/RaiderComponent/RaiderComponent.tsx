import React from 'react'
import tank from '../../img/tank.png'
import dps from '../../img/dps.png'
import healer from '../../img/healer.png'
import "./Raider.css"

interface IRaiderProps {
    identifier: string,
    classRole: string
}

class Raider extends React.Component<IRaiderProps, any> {

    id = "r" + this.props.identifier //TODO check if i can do this differntly
    className = "raider " + this.props.classRole
    roleIcon = this.props.classRole + "RoleIcon"


    // constructor(props){
    //     super(props)
    // }

    render() {
        let source: any
        if (this.props.classRole === "tank") {
            source = tank
        }
        else if (this.props.classRole === "dps") {
            source = dps
        }
        else {
            source = healer
        }

        return (
            <div id={this.id} className={this.className} >
                <img className={this.roleIcon} src={source} alt={this.props.classRole}></img>
                <div className="current_life_text_wrapper">
                    <div className="current_life_text">100%</div>

                    <div className="dead">
                        <div className="dead_text"><i>DEAD</i></div>
                        <img src="../img/skull.png" alt={"skull"}></img>
                    </div>
                    <div className="current_life_bar"></div>
                    <div className="incoming_heal"></div>
                </div>
            </div>

        )
    }
}

export default Raider