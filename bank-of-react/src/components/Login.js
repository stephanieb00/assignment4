// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <div>
            <img src="https://oldschool.runescape.wiki/images/thumb/a/ac/Bank_logo.png/1200px-Bank_logo.png?a29fb" alt="bank"/>
            <h1>Bank of React</h1>
            <div className="pageLinks">
              <Link to="/">Home</Link>
              <Link to="/userProfile">User Profile</Link>
              <Link to="/credits">Credits</Link>
              <Link to="/debits">Debits</Link>
            </div>
          </div>
        <div id ="loginForm">
          <form onSubmit={this.handleSubmit}>
            <div className="formSet">
              <label htmlFor="userName">Username: </label>
              <input type="text" name="userName" placeholder = "Enter Username" onChange={this.handleChange} value={this.state.user.userName} />
            </div>
            <div className="formSet">
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" placeholder = "Enter Password"/>
            </div>
            <button>Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LogIn