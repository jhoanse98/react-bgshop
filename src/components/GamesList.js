import React from 'react';
import GameCard from "./GameCard";
import PropTypes from 'prop-types';

const GamesList = ({ games, toggleFeatured}) => (
	<div className="ui four cards">
		{
			games.length ===0 ? 
			(
				<div className="ui icon message">
					<i className="icon info"></i>
					<div className="content">
						<div className="header">There are no games in your store</div>
						<p>You should add some, don't you think?</p>
					</div>
				</div>
			) : (
				games.map(game => <GameCard game={game} toggleFeatured={toggleFeatured} key={game._id}/>)
			)	
		}
	</div>
);

GamesList.propTypes={
	games: PropTypes.arrayOf(PropTypes.object).isRequired,
	toggleFeatured: PropTypes.func.isRequired,
};

GamesList.defaultProps={
	games:[]
}

export default GamesList;