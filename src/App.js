import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './styles/style.css';
import logo from "./images/logo.png";

class App extends Component {
  state={
    userName:'',
    passWord:'',
  }
 
  handleUserName = e => this.setState({userName:e.target.value});
  handlePassWord = e => this.setState({passWord:e.target.value});

  handleLogin = e =>{
    const {userName,passWord} = this.state
    const payLoad = {
      userName,
      passWord:window.btoa(passWord),
    }
    //console.log(payLoad);
    //api call to post payload
  }

  render() {
    return (
      <div className="container">
        <div className="account-page">
          <div className="login-page">
            <div className="row">
              <div className="logo">
                <img src={logo} width="200px" height="150px" title="Logo" alt="Suraksha" />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 form-groups relative">
                <input placeholder="Username" id="userName" type="text" className="validate" value={this.state.userName} onChange={this.handleUserName} />
                <span className="username">user</span>
              </div>
            </div>
            <div className="row margin-bottom-10">
              <div className="input-field col s12 form-groups relative">
                <input placeholder="Password" id="password" type="password" className="validate" value={this.state.passWord} onChange={this.handlePassWord} />
                <span className="password">password</span>
              </div>
            </div>
            <div className="row">
              <div className="form-groups col s12">
                <button className="btn waves-effect waves-light green-btn" type="submit" name="action" onClick={this.handleLogin}>login
                </button>
              </div>
            </div>
            <div className="form-groups">
              <a className="forgot" href="javascript:void(0)">Forgot Username / Password?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
