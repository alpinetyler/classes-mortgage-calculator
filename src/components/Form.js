import React, {Component} from "react";

export default class Form extends Component {

    constructor() {
        super()
    
        this.state = {
            amount: ""
        }
    }
    
    handleChange(value) {
        let newValue = value * 2;
    
        this.setState({ amount: newValue})
    }
    
    render() {
        return(
            <div className="App">
                <h1>Hello Form!</h1>
                <form automcomplete="off">
                <input 
                name="amount" 
                onChange={e => this.handleChange(e.target.value)}></input>
                </form>
            new Amount = {this.state.amount}
            </div>
        )
    }
}