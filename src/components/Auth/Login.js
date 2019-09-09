import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            loggedIn: false
        }
    }

    handleChange = name => e => {
        this.setState({ [name] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = JSON.parse(localStorage.getItem("user"));
        if(email=== user.email && password === user.password){
            this.setState({
                loggedIn: true
            })
        }
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to="/todo"/>
        }
        return (
            <div className="container" style={{border:'2px solid black',  marginTop:'50px', padding: '10px', borderRadius: '10px'}}>
                <h2 className="mt-5 mb-5 text-center text-capitalize">Login!</h2>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            type="email"
                            placeholder="Email"
                            onChange={this.handleChange('email')} 
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input 
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange('password')}
                            className="form-control"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-raised btn-primary"
                    >
                        Login
                    </button>
                </form> 
            </div>
        )
    }
}

export default Login;
