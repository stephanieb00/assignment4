// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <div>
            <img src="https://oldschool.runescape.wiki/images/thumb/a/ac/Bank_logo.png/1200px-Bank_logo.png?a29fb" alt="bank"/>
            <h1>Bank of React</h1>
            <div className="pageLinks">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/credits">Credits</Link>
              <Link to="/debits">Debits</Link>
            </div>
          </div>

          <h1>User Profile</h1>
          <div id="usr">
            <img src="https://img2.pngio.com/instagram-person-profile-user-icon-instagram-person-icon-png-512_512.png" alt="profile"/>
            <div className= "userProfile">Username: {this.props.userName}</div>
            <div className= "userProfile">Member Since: {this.props.memberSince}</div>
          </div>
        </div>
    );
  }
  
}

export default UserProfile;