import React from 'react';
import GamesList from "./GamesList";
import  _orderBy from "lodash/orderBy"; // me permite ordenar con base a 2 o mas caracteristicas 
//imporT _sortBy from "lodash/sortBy"; //esto me permite ordenar con base a una característica



const games = [
	{
		_id:1,
		feature: true,
		price:32.99,
		thumbnail:"https://img.depor.com/files/listing_ec_flujo_xx/uploads/2018/10/26/5bd3e730ed55d.jpeg",
		name:"resident evil 2 remake",
		players:"2-4",
		duration: 60
	},
	{
		_id:2,
		feature: false,
		price: 300.99,
		thumbnail:"https://images-na.ssl-images-amazon.com/images/I/91BpIH3u1YL._SX569_.jpg",
		name:"God of War",
		players:"1",
		duration:1200
	 },
	 {
		_id:3,
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
		state= {
			games:[]
		};
	};
	*/

 	state={
 		games:[]
 	};

 	componentDidMount(){
		this.setState({games: _orderBy(games, ["feature", "name"], ["desc", "asc"])
	});
	} //este metodo se llama despues que la pagina ya se haya renderizado la primera vez
	
	toggleFeatured(gameID){
		alert(gameID);
	}


 	render(){
 		return (
 			<div className="ui container">
				<GamesList 
				games={this.state.games}
				toggleFeatured={this.toggleFeatured}
				/>
			</div>
 		)
 	}
 }


export default App;
 