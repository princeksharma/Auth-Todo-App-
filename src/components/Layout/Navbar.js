import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: this.props
        }
    }
    componentDidMount(){
        const user = localStorage.getItem('user');
        if(user !== null){
            this.setState({loggedIn: true});
        }
    }

    render(){
    const {loggedIn} = this.state;
    // console.log(loggedIn);
    return (
        <nav className="navbar navbar-dark bg-dark mb-10">
            <span className="navbar-brand mb-0 h1 mx-auto">React Todo App</span>
            <Link to={loggedIn ? "/logout" : "/login"}>
                <button 
                    type="submit" 
                    className={
                        loggedIn ? "btn btn-danger" : "btn btn-success" 
                    }
                >
                    {loggedIn? 'Logout': 'Login'}
                </button>
            </Link>
        </nav>
    )
}
}

export default NavBar;