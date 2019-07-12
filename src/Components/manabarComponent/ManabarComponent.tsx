import React from 'react'
import "./manabar.css"

/*interface IRaiderProps {
    identifier: string,
    classRole: string
}*/

class Manabar extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div className="manabar_background" >
                <div className="current_mana_bar"></div>
                <div className="mana_current_amount">Test</div>
                <div className="mana_max_amount">1.5s</div>
            </div>
        )
    }
}

export default Manabar