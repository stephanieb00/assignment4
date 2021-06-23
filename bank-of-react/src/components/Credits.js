import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance'

class Credits extends Component {

    /*[{"id":"c41084b1-ad84-4630-bc8d-679fb66c5deb",
        "description":"Tasty Frozen Keyboard",
        "amount":669.68,
        "date":"2018-04-26T09:26:58.413Z"}
    */
    constructor(props) {
        super(props);
        this.state = {
            creditList: {
                id: "",
                description: "",
                amount: "",
                date: "",
            },
        }
    }  

    showCredits(){
        if(this.props.creditList ){

            let items = this.props.creditList.map((credit) =>{
                return(
                    <div key={credit.id} className="container">
			        <ul id = "credit-description">Credit Description: {credit.description}</ul>
			        <ul id = "credit-amount">Credit amount: {credit.amount}</ul>>
			        <ul id = "credit-date">Credit date: {credit.date}</ul>
			        </div>
                );
            });
            return items;
        }
    }
   /*handleDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleAmount = (event) => {
        this.setState({amount: event.target.value });
    }*/

    handleChange = (event) => {
        // alert(e.target.name)
        const name = event.target.name;
        const value = event.target.value;
        const date = Date().toLocaleString();

        let creditList = this.state.creditList;
        creditList[name] = value
        creditList.date = date
        this.setState({
            creditList
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateCredit(this.state.creditList)
    }
    
    render() {

        
        return(
            <div>
                <h1>Bank of React</h1>
                <p></p>
                <Link to = "/userProfile"><button type = "submit">User Profile</button></Link>
                <Link to = "/debit"><button type = "submit">Debit</button></Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>

                <fieldset>
                    <h3>Add Credit</h3>
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

                {this.showCredits()}
            </div>
        );
    }
}
export default Credits