import React from "react";
import PropTypes from "prop-types"

const TopNavigation = ({ShowGameForm})=> (
    <div className="ui secondary pointing menu">
        <a href="/" className="item">
            BGSHOP
        </a>
        <a className="item" onClick={ShowGameForm} >
            <i className="icon plus"/>ADD NEW GAME
        </a>
    </div>

);

TopNavigation.propTypes ={
    ShowGameForm : PropTypes.func.isRequired,
};

export default TopNavigation;