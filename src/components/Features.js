import React from "react";
import PropTypes from "prop-types";

const Features = ({features, togglefeatured, gameID}) =>(
    <span>
        {features ? (
            <a onClick={()=> togglefeatured(gameID)} className="ui right yellow corner label">
                <i className="star icon"></i>
            </a>
        ) : (
            <a onClick={()=> togglefeatured(gameID)} className="ui right corner label">
                <i className="empty star icon"></i>
            </a>

        )}
    </span>
);

Features.propTypes = {
    features: PropTypes.bool.isRequired,
    togglefeatured: PropTypes.func.isRequired,
    gameID: PropTypes.number.isRequired
};

export default Features;