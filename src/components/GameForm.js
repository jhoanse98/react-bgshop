import React, {Component} from 'react';

class GameForm extends Component {
    state={
        name: "",
        description: ""
    }  

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    handlechange = e => this.setState({[e.target.name]: e.target.value});

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
                        placeholder="Full Game Title" 
                        value={this.state.name}
                        onChange={this.handlechange}
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
                        onChange={this.handlechange}
                    />
                </div>

                <button className="ui botton" type="submit">Create</button>
            </form>
        );
    }
}

export default GameForm;