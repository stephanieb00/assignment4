// src/App.js

import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0.00,
      //debitList:[],
      //creditList:[],
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      }
    }
  }
  
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    let temp = debits.data;
    let temp2 = credits.data;
    this.setState({debitList: temp,});
    this.setState({creditList: temp2,});

    //print data from API response
    console.log("Debits: ", debits.data);
    console.log("Credits: ", credits.data);

    //To handle the accountBalance
    for(let i of temp){
      //console.log("Debits amount: ", i.amount);
      this.setState({accountBalance: parseInt(this.state.accountBalance) - i.amount});
      //console.log(i.amount,this.state.accountBalance);
    }
    for(let i of temp2){
      //console.log("Debits amount: ", i.amount);
      this.setState({accountBalance: parseInt(this.state.accountBalance) + i.amount});
      //console.log(i.amount,this.state.accountBalance);
    }


  }


  addDebit = (debits) => {
    const newDebit = [debits, ...this.state.debitList]
    this.setState({debitList: newDebit})
    this.setState({accountBalance: parseInt(this.state.accountBalance) - parseInt(debits.amount)})
  }

  addCredit = (credits) => {
    const newCredit = [credits, ...this.state.creditList]
    this.setState({creditList: newCredit})
    this.setState({accountBalance: parseInt(this.state.accountBalance) + parseInt(credits.amount)})
  }


  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);    
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits creditList = {this.state.creditList} addCredit = {this.addCredit} accountBalance = {this.state.accountBalance}/>)
    const DebitsComponent = () => (<Debits debitList = {this.state.debitList} addDebit = {this.addDebit} accountBalance = {this.state.accountBalance}/>)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path = "/credits" render = {CreditsComponent}/>
            <Route exact path = "/debits" render = {DebitsComponent}/>
          </div>
        </Router>
    );
  }
}

export default App;