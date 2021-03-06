import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from "react-image-fallback";
import FormInlineMessage from "./FormInlineMessage";
/*
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
*/

const initialData = {
    _id:null,
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    feature: false,
    thumbnail:""
}

class GameForm extends Component {
    state={
        data:initialData,
        errors:{} 
    } 

    componentDidMount(){
        if(this.props.game._id){
            this.setState({data: this.props.game});
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.game._id && nextProps.game._id != this.state.data._id){
            this.setState({data: nextProps.game});
        } 

        if(!nextProps.game._id){
            this.setState({data: initialData});
        }
    }

    validate(data){
        const errors= {};
        
        if (!data.name) errors.name=  "this field can´t be blank";
        if (!data.players) errors.players=  "this field can´t be blank";
        if (!data.thumbnail) errors.thumbnail=  "this field can´t be blank";
        if (data.price <= 0) errors.price=  "too cheap, don´t you think?";
        if (data.duration <= 0) errors.duration=  "this is so short";

        return errors;
    } 


    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length === 0){
            this.props.submits(this.state.data);
            console.log(this.state.data);
        }
    };
/*
    handlechange = e => this.setState({
        [e.target.name]:
        e.target.type === "number"
         ? parseInt(e.target.value,10)
         : e.target.value});
*/

    handleStringchange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
    handleNumberchange = e =>
     this.setState({
         data:{
            ...this.state.data,
            [e.target.name]: parseInt(e.target.value,10)
        }
    });
    handleCheckboxchange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.checked}});
    
    /*
    toggletag = tag =>
     this.state.tags.includes(tag._id)
     ? this.setState({tags: this.state.tags.filter(id => id !== tag._id)})
     : this.setState({tags: [...this.state.tags, tag._id]});
    
    handleGenreChange = genre => this.setState({genre: genre._id});
    */    

    render(){
        const {data, errors} = this.state;
        console.log(data.publisher);  
        return(
            //form.ui.form>.field>label+input
            <form className="ui form" onSubmit={this.handleSubmit}>

                <div className="ui grid">
                    <div className="twelve wide column">
                        <div className={errors.name ? "field error" : "field"}>
                            <label htmlFor="name">Game Title</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name" 
                                value={data.name}
                                onChange={this.handleStringchange}
                            />
                            <FormInlineMessage content={errors.name} type="error" />
                        </div>
                
                        <div className={errors.description ? "field error" : "field"}>
                            <label htmlFor="description">Game Description</label>
                            <textarea   
                                type="text" 
                                id="description"
                                name="description" 
                                placeholder="Full game description" 
                                value={data.description}
                                onChange={this.handleStringchange}
                            />
                            <FormInlineMessage content={errors.description} type="error" />
                        </div>
                    </div>
                    <div className="four wide column">
                        <ReactImageFallback
                            src={data.thumbnail}
                            fallbackImage="http://via.placeholder.com/250x250"
                            alt="Thumbnail"
                            className="ui image"
                        />
                    </div>
                </div>
                
                <div className={errors.thumbnail ? "field error" : "field"}>
                    <label htmlFor="thumbnail">Game Thumbnail</label>
                    <input   
                        type="text" 
                        id="thumbnail"
                        name="thumbnail" 
                        placeholder="Image URL" 
                        value={data.thumbnail}
                        onChange={this.handleStringchange}
                    />
                    <FormInlineMessage content={errors.thumbnail} type="error" />
                </div>

                <div className="three fields">
                    <div className={errors.price ? "field error" : "field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            id="price"
                            name="price" 
                            value={data.price}
                            onChange={this.handleNumberchange}
                        />
                        <FormInlineMessage content={errors.price} type="error" />
                    </div>

                    <div className={errors.duration ? "field error" : "field"}>
                        <label htmlFor="duration">Duration</label>
                        <input 
                            type="number" 
                            id="duration"
                            name="duration" 
                            value={data.duration}
                            onChange={this.handleNumberchange}
                        />
                        <FormInlineMessage content={errors.duration} type="error" />
                    </div>
-
                    <div className={errors.players ? "field error" : "field"}>
                        <label htmlFor="players">Players</label>
                        <input 
                            type="text" 
                            id="players"
                            name="players" 
                            value={data.players}
                            onChange={this.handleStringchange}
                        />
                        <FormInlineMessage content={errors.players} type="error" />
                    </div>
                </div>

                <div className="inline field">
                    <input 
                        id="feature"
                        name="feature"
                        type="checkbox" 
                        checked={data.feature}
                        onChange={this.handleCheckboxchange}                        
                        />
                    <label htmlFor="feature">feature?</label>
                </div>
                
                
                <div className="ui fluid buttons">
                    <button className="ui primary button" type="submit">
                        Create
                    </button>
                    <div className="or" />
                    <a className="ui button" onClick={this.props.cancel}>
                        cancel
                    </a>
                </div>
                
            </form>
        );
    }
}

GameForm.propTypes = {
    publishers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
    })
    ).isRequired,
    cancel: PropTypes.func.isRequired,
    submits: PropTypes.func.isRequired,
    game: PropTypes.shape({
        name: PropTypes.string,
		thumbnail: PropTypes.string,
		players: PropTypes.string,
		duration: PropTypes.number,
		price: PropTypes.number,
		feature: PropTypes.bool
    }).isRequired,
};

GameForm.defaultProps ={
    publishers: []
};

export default GameForm;

/*
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
*/
