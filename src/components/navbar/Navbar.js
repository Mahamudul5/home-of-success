import React from 'react';

import { Link } from 'react-router-dom';


// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div>


            <nav>

                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to="/logIn">logIn</Link>
                <Link to="/signUp">signUp</Link>
                <Link to="*">404</Link>
            </nav>
        </div>
    );
};

export default Navbar;