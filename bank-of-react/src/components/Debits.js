import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance'


class Debits extends Component{

    constructor(props) {
        super(props);
        this.state = {
            debitList: {
                id: "",
                description: "",
                amount: "",
                date: "",
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    
    showDebits(){
        if(this.props.debitList ){

            let items = this.props.debitList.map((debit) =>{
                return(
                    <div key={debit.id} className="container">
			        <ul className = "descriptions">Debit Description: {debit.description}</ul>
			        <ul className = "amounts">Debit amount: {debit.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})}</ul>
			        <ul className = "dates">Debit date: {debit.date}</ul>
			        </div>
                );
            });
            return items;
        }
    }


    handleChange = (event) => {
        // alert(e.target.name)
        const name = event.target.name;
        const value = event.target.value;
        const date = Date().toLocaleString();

        let debitList = this.state.debitList;
        debitList[name] = value
        debitList.date = date
        this.setState({
            debitList
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDebit(this.state.debitList)
    }
    
    render() {

        
        return(
            <div>
                <div>
                    <img src="https://oldschool.runescape.wiki/images/thumb/a/ac/Bank_logo.png/1200px-Bank_logo.png?a29fb" alt="bank"/>
                    <h1>Bank of React</h1>
                    <div className="pageLinks">
                        <Link to="/">Home</Link>
                        <Link to="/userProfile">User Profile</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/credits">Credits</Link>
                    </div>
                    <div className="accountBalance">
                    <AccountBalance accountBalance = {this.props.accountBalance}/>
                    </div>
                </div>

                <fieldset>
                    <h3>Add Debit</h3>
                    <form onSubmit={ this.handleSubmit}>
                        <label>
                            Description:
                        </label>
                            <input type = "text" name = "description" placeholder = "Enter item" onChange = {this.handleChange} value = {this.state.description}/>
                        <label>
                            Amount:
                        </label>
                            <input type = "number" min="0" step="any" name = "amount" placeholder = "0.00" onChange = {this.handleChange} value = {this.state.amount}/>
                            <button type = "submit"> Submit </button>
                    </form>
                </fieldset>

                {this.showDebits()}
            </div>
        );
    }

}
export default Debits