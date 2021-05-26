import React, {Component} from "react";

export default class Form extends Component {

    constructor() {
        super()
    
        this.state = {
            amount: "",
            rate: "",
            years: ""
        }
    }
    
    handleChange = (event) => {
    
       const {name, value} = event
      
           this.setState({ [name]: value})  
    
    }
    
    render() {
        let {amount, rate, years} = this.state
        parseFloat(amount, rate, years)
    
        let monthlyInterest = (rate / 100) / 12;
        let months = years * 12;
        
        amount = amount.replace(/\$|,/g, '')
    
        let monthlyPayment = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months))
        return(

            
            <div className="App">
                <h1>The Form</h1>
                <form automomplete="off">
                <input 
                name="amount" 
                value={this.state.amount}
                onChange={e => this.handleChange(e.target)} 
                autocomplete="off"
                placeholder="Loan Amount"
                />
                <p>
                <input 
                name="rate" 
                value={this.state.rate}
                onChange={e => this.handleChange(e.target)} 
                autocomplete="off"
                placeholder="Interest Rate"/>
                </p>
                <p>
                <input 
                name="years" 
                value={this.state.years}
                onChange={e => this.handleChange(e.target)} 
                autocomplete="off"
                placeholder="Term in years"/>
                </p>
                </form>
            Monthly Payment = {monthlyPayment}
            </div>
        )
    }
}