import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AccountBalance from './AccountBalance'


class Credits extends Component {

    /*[{"id":"c41084b1-ad84-4630-bc8d-679fb66c5deb",
        "description":"Tasty Frozen Keyboard",
        "amount":669.68,
        "date":"2018-04-26T09:26:58.413Z"}
    */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        this.state = {
            creditList: {
                description: "",
                amount: 0,
                date: "",
            },
        }
    }  

    showCredits(){
        if(this.props.creditList ){

            let items = this.props.creditList.map(credit =>(
                //return(
                    <div key ={credit.id} className="container">
			            <ul className = "descriptions">Credit Description: {credit.description}</ul>
			            <ul className = "amounts">Credit amount: {credit.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})}</ul>
			            <ul className = "dates">Credit date: {credit.date}</ul>
			        </div>
                //);
            ));
            return items;
        }
    }


   /*handleDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleAmount = (event) => {
        this.setState({amount: event.target.value });
    }*/

    handleChange(e){
        // alert(e.target.name)
        const name = e.target.name;
        const value = e.target.value;
        const date = new Date;
        const temp = {...this.state.creditList};
        temp[name] = value;
        temp.date = date.toISOString();
        temp.id = uuidv4();
        this.setState({creditList: temp,});

    }

    handleSubmit(e){
        e.preventDefault();
        //console.log(this.state.creditList);
        //console.log(this.props);//works
        this.props.addCredit(this.state.creditList);
        this.forceUpdate();
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
                        <Link to="/debits">Debits</Link>
                    </div>
                    <div className="accountBalance">
                        <AccountBalance accountBalance = {this.props.accountBalance}/>
                    </div>
                </div>
                
                <fieldset>
                    <h3>Add Credit</h3>
                    <form onSubmit={this.handleSubmit}>
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