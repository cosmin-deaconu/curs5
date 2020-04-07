import React from 'react';
import {Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Header.css';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';

function Header (props){

    const{ signOut, user } = props;

    return (
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">      
                <Link to="/"  className="my-3">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>

                <div>
                    {
                        user 
                        ?
                        <div>
                            <p>{user.displayName}</p>
                            <button onClick={signOut}>Delogare</button>
                        </div>
                        :
                        <Link to="/login" className="ml-2">Login</Link>
                    }
                    <ShoppingCart className="ml-2" />
                
                </div>
            </div>
        </header>
    );
}

export default Header;