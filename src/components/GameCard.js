import React from "react"
import PropTypes from "prop-types";
import Features from "./Features";

class Gamecard extends React.Component{

	state={
		showconfirmation: false,
	}

	showconfirmation = () => this.setState({showconfirmation: true});
	hideconfirmation = () => this.setState({showconfirmation: false});

	render(){

		const {game, toggleFeatured, editGame, deleteGame} = this.props;
		return(
			
			
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
				<div className="extra content">
					{
						this.state.showconfirmation ? 
						(
							<div className="ui two buttons">
								<a 
									className="ui red basic button" 
									onClick={()=> deleteGame(game)}
								>
									<i className="ui icon check" />YES
								</a>
								<a 
									className="ui grey basic button" 
									onClick={this.hideconfirmation}
								>
									<i className="ui icon close"/>NO
								</a>
							</div>
						) : (
							<div className="ui two buttons">
								<a 
									className="ui green basic button" 
									onClick={()=>editGame(game)}
								>
									<i className="ui icon edit"></i></a>
								<a 
									className="ui red basic button" 
									onClick ={this.showconfirmation}
								>
									<i className="ui icon trash" />

								</a>
							</div>
						)
					};
				</div>
			</div>
		)
	}
}



Gamecard.propTypes={
	game: PropTypes.shape({
		name: PropTypes.string.isRequired,
		thumbnail: PropTypes.string.isRequired,
		players: PropTypes.string.isRequired,
		duration: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		feature: PropTypes.bool.isRequired
	}).isRequired,
	toggleFeatured: PropTypes.func.isRequired,
	editGame: PropTypes.func.isRequired,
};

export default Gamecard;

