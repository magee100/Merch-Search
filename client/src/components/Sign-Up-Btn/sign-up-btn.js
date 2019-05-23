import React, { Component } from "react";

class userSignUp extends Component {
    state = {
        username: "",
        password: ""
    };

    handlerUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handlerPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`Hellow user:${this.state.username} we won't show your password:${this.state.password}, we promise.`)
      }
    
      render() {
        return (
          <userSignUp onSubmit={this.handleSubmit}>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleUsernameChange}
              value={this.state.username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
            <button>Submit</button>
          </userSignUp>
        );
      }
    }
    
    export default userSignUp;
    