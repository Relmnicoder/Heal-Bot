import React from 'react'
import "./castbar.css"


class Castbar extends React.Component {

    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div className="castbar">
                <div className="current_cast_bar"></div>
                <div className="cast_image"></div>
                <div className="cast_name">Test</div>
                <div className="cast_timer">1.5s</div>
            </div>

        )
    }
}

export default Castbar