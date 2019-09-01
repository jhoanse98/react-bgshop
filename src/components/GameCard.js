import React from "react"
import PropTypes from "prop-types";
import Features from "./Features";


const Gamecard = ({game, toggleFeatured}) => (
	<div className="ui card">
		<div className="image">
			<span className="ui green ribbon label">${game.price}</span>
			< Features
			 features={game.feature} 
			 togglefeatured={toggleFeatured} 
			 gameID={game._id}
			/>
			<img src={game.thumbnail} alt="Game Cover" />
		</div>
		<div className="content">
			<a  className="header">{game.name}</a>
			<div className="meta">
				<i className="icon users" />{game.players}&nbsp;
				<i className="icon wait" />{game.duration} min.
			</div>
		</div>
	</div>	
);


Gamecard.propTypes={
	game: PropTypes.shape({
		name: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired,
		players: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		feature: PropTypes.bool.isRequired
	}).isRequired,
	toggleFeatured: PropTypes.func.isRequired
};

export default Gamecard;

