import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css';

function Layout (props){
    const{ signOut, user } = props;
    return (
        <div>
            <Header signOut={signOut} user={user}/>
                {props.children}
            <Footer />
        </div>
    );
}

export default Layout;