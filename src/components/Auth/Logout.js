import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
    render() {
        return (
            <div className="container my-20 text-center">
               <h1 className="text-capitalize text-center">You have been logged out!!! Please Login again</h1>
               <Link to="/">
                    <button 
                        type="submit"
                        className="btn btn-raised btn-primary "
                    >
                        Login
                    </button>   
               </Link>
            </div>
        )
    }
}

export default Logout
