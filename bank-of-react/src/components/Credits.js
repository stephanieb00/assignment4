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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleClick = this.handleClick.bind(this);
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
			        <ul id = "credit-amount">Credit amount: {credit.amount.toLocaleString("en-US",{style: "currency", currency: "USD"})}</ul>
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

    handleChange(e){
        // alert(e.target.name)
        const name = e.target.name;
        const value = e.target.value;
        const date = Date().toLocaleString();

        let creditList = this.state.creditList;
        creditList[name] = value;
        creditList.date = date;
        this.setState({
            creditList
        })
        //console.log(creditList)
    }

    handleSubmit(e){
        e.preventDefault();
        //console.log(this.state.creditList);
        //console.log(this.props);//works
        this.props.addCredit(this.state.creditList);
    }
    
    
    render() {

        
        return(
            <div>
                <h1>Bank of React</h1>
                <p></p>
                <Link to = "/userProfile"><button type = "submit">User Profile</button></Link>
                <Link to = "/debits"><button type = "submit">Debits</button></Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>

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