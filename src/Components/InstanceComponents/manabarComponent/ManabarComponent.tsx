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
            <div className="manabar">
                <div className="current_mana_bar"></div>
                <div className="mana_numbers">
                    95%
                </div>
            </div>
        )
    }
}

export default Manabar