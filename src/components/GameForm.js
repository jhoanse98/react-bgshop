import React, {Component} from 'react';
import PropTypes from 'prop-types';

const tags=[
    {_id: 1, name: "dice"},
    {_id: 2, name: "economic"},
    {_id: 3, name: "family"}
];

const genres=[
    {_id: 1, name: "hellfire"},
    {_id: 2, name: "euro"},
    {_id: 3, name: "ameritrash"}
];


class GameForm extends Component {
    state={
        name: "",
        description: "",
        price: 0,
        duration: 0,
        players: "",
        feature: false,
        tags: [],
        genre: 1,
        publisher:0
    }  

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state); 
    };
/*
    handlechange = e => this.setState({
        [e.target.name]:
        e.target.type === "number"
         ? parseInt(e.target.value,10)
         : e.target.value});
*/

    handleStringchange = e => this.setState({[e.target.name]: e.target.value});
    handleNumberchange = e => this.setState({[e.target.name]: parseInt(e.target.value,10)});
    handleCheckboxchange = e => this.setState({[e.target.name]: e.target.checked});
    toggletag = tag =>
     this.state.tags.includes(tag._id)
     ? this.setState({tags: this.state.tags.filter(id => id !== tag._id)})
     : this.setState({tags: [...this.state.tags, tag._id]});
    
    handleGenreChange = genre => this.setState({genre: genre._id});
        

    render(){
        return(
            //form.ui.form>.field>label+input
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Game Title</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleStringchange}
                    />
                </div>
                
                <div className="field">
                    <label htmlFor="description">Game Description</label>
                    <textarea   
                        type="text" 
                        id="description"
                        name="description" 
                        placeholder="Full game description" 
                        value={this.state.description}
                        onChange={this.handleStringchange}
                    />
                </div>

                <div className="three fields">
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            id="price"
                            name="price" 
                            value={this.state.price}
                            onChange={this.handleNumberchange}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="duration">Duration</label>
                        <input 
                            type="number" 
                            id="duration"
                            name="duration" 
                            value={this.state.duration}
                            onChange={this.handleNumberchange}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="players">Players</label>
                        <input 
                            type="text" 
                            id="players"
                            name="players" 
                            value={this.state.players}
                            onChange={this.handleStringchange}
                        />
                    </div>
                </div>

                <div className="inline field">
                    <input 
                        id="feature"
                        name="feature"
                        type="checkbox" 
                        checked={this.state.feature}
                        onChange={this.handleCheckboxchange}                        
                        />
                    <label htmlFor="feature">feature?</label>
                </div>

                <div className="field">
                    <label>tags</label>
                    {
                        tags.map(tag=>(
                            <div>
                                <input 
                                id={`tag-${tag._id}`}
                                type="checkbox"
                                checked={this.state.tags.includes(tag._id)}
                                onChange={()=>this.toggletag(tag)}
                                />
                                <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div className="field">
                    <label>Genres</label>
                    {
                        genres.map(genre=>(
                            <div>
                                <input 
                                    id={`genre-${genre._id}`}
                                    type="radio"
                                    checked={this.state.genre===genre._id}
                                    onChange={()=> this.handleGenreChange(genre)}
                                />
                                <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div className="field">
                    <label>publishers</label>
                    <select
                        name="publisher"
                        value={this.state.publisher}
                        onChange={this.handleNumberChange}
                    >
                        <option value="0">choose publisher</option>
                        {this.props.publishers.map(publisher=>(
                            <option value={publisher._id} key={publisher._id}>{publisher.name}</option>
                        ))}
                    </select>
                </div>

                <button className="ui botton" type="submit">Create</button>
            </form>
        );
    }
}

GameForm.propTypes = {
    publishers: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

GameForm.defaultProps ={
    publishers: []
};

export default GameForm;