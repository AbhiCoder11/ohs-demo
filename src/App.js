import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import './styles/style.css';
import logo from "./images/logo.png";

class App extends Component {
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
                <input placeholder="Username" id="userName" type="text" className="validate" />
                <span className="username">user</span>
              </div>
            </div>
            <div className="row margin-bottom-10">
              <div className="input-field col s12 form-groups relative">
                <input placeholder="Password" id="password" type="password" className="validate" />
                <span className="password">password</span>
              </div>
            </div>
            <div className="row">
              <div className="form-groups col s12">
                <button className="btn waves-effect waves-light green-btn" type="submit" name="action">login
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
