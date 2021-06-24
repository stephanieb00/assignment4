// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
          <img id="bankIMG" src="https://oldschool.runescape.wiki/images/thumb/a/ac/Bank_logo.png/1200px-Bank_logo.png?a29fb" alt="bank"/>
          <h1>Bank of React</h1>
          <div className="pageLinks">
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/credits">Credits</Link>
            <Link to="/debits">Debits</Link>
          </div>
          <div className="accountBalance">
          <AccountBalance accountBalance = {this.props.accountBalance}/>
          </div>
        </div>
    );
  }
}

export default Home;