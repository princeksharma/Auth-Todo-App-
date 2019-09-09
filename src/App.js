import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Todo from './components/Todos';
import Logout from './components/Auth/Logout';

class App extends Component {
  constructor(props){
    super(props)  
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount(){
    const user = {
        email: 'user@gmail.com',
        password:'user1234'
      }
    localStorage.setItem("user",JSON.stringify(user));
  }

  render() {
    return (
      <div>
        <Navbar loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/todo" component={Todo}/>
            <Route exact path="/logout" component={Logout}/>
          </Switch>
      </div>
    )
  }
}

export default App;
