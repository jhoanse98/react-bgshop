import React from 'react';
import GamesList from "./GamesList";
import  _orderBy from "lodash/orderBy"; // me permite ordenar con base a 2 o mas caracteristicas 
//imporT _sortBy from "lodash/sortBy"; //esto me permite ordenar con base a una característica
import GameForm from "./GameForm";

const publisher = [
	{
		_id: 1,
		name:" every now and then i fall apart"
	},
	{
		_id:2,
		name: "once upon a time"
	}
]


const games = [
	{
		_id:1,
		publisher:2,
		feature: true,
		price:32.99,
		thumbnail:"https://img.depor.com/files/listing_ec_flujo_xx/uploads/2018/10/26/5bd3e730ed55d.jpeg",
		name:"resident evil 2 remake",
		players:"2-4",
		duration: 60
	},

	{
		_id:2,
		publisher:2,
		feature: false,
		price: 300.99,
		thumbnail:"https://images-na.ssl-images-amazon.com/images/I/91BpIH3u1YL._SX569_.jpg",
		name:"God of War",
		players:"1",
		duration:1200
	 },
	 {
		_id:3,
		publisher:1,
		feature: true,
		price: 67.99,
		thumbnail: "https://d3fa68hw0m2vcc.cloudfront.net/25e/214062638.jpeg",
		name: "Crash Team Racing",
		players: "2-8",
		duration: 1200,

	 },
	 
 ];
 

 class App extends React.Component{
	/*
	constructor(props){
		super(props);
		this.state= {
			games:[]
		};

		this.toggleFeatured = this.toggleFeatured.bind(this);
	}; // primera forma de bind una función  dentro del constructor y con bind
	*/

 	state={
 		games:[]
 	};

 	componentDidMount(){
		this.setState({games:this.sortgames(games)
		});
	} //este metodo se llama despues que la pagina ya se haya renderizado la primera vez
	
	sortgames(games){
		return  _orderBy(games, ["feature", "name"], ["desc", "asc"]);
	}

	toggleFeatured = gameID => {
		console.log(this);
		const newgames = this.state.games.map(game => {
			if(game._id === gameID) return {...game, feature: !game.feature};
			return game;
		});
		this.setState ({games: this.sortgames(newgames)});
	}// segunda forma de bind una función es convirtiendola en una arrow function


 	render(){
 		return (
			 <div className="ui container">
				 <GameForm publishers={publisher}/>
				 <br />
				<GamesList 
				games={this.state.games}
				toggleFeatured={this.toggleFeatured}
				/>
			</div>
 		)
 	}
 }


export default App;
 