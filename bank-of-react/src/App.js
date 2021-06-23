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

  componentDidMount = async() => {
    this.addCredit();
    this.addDebit();

  }

  //addCredit function
  addCredit()
  {
    const creditAPI = "https://moj-api.herokuapp.com/credits";

    axios.get(creditAPI).then(response =>{
      let temp = response.data;
      this.setState({creditList: temp,})
    })
  }

  updateCredit = (credits) => {
    const newCredit = [credits, ...this.state.creditList]
    this.setState({creditList: newCredit})
    this.setState({accountBalance: parseInt(this.state.accountBalance) + parseInt(credits.amount)})
  }

  //addDebit function
  addDebit(){}

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);    
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits creditList = {this.state.creditList} updateCredit = {this.updateCredit} accountBalance = {this.state.accountBalance}/>)
    const DebitsComponent = () => (<Debits debitList = {this.state.debitList} updateDebit = {this.updateDebit} accountBalance = {this.state.accountBalance}/>)

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