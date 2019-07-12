import React from 'react'
import "./castbar.css"

/*interface IRaiderProps {
    identifier: string,
    classRole: string
}*/

class Castbar extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div className="castbar_background" >
                <div className="current_cast_bar"></div>
                <div className="cast_image"></div>
                <div className="cast_name">Test</div>
                <div className="cast_timer">1.5s</div>
            </div>

        )
    }
}

export default Castbar