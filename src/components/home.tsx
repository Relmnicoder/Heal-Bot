import React from "react";
import { NavLink } from "react-router-dom";

import "./home.css";

class home extends React.Component {
    render() {
        return (
            <div className="home">
                <NavLink to="/HealBot"> HealBot </NavLink>
            </div>
        );
    }
}

export default home;
