import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
    const path = useLocation().pathname;
    return (
        <header>
            <Link to="/"><img src="/"/></Link>
            {
                (path === '/' || path === '/sinup') ?
                    <Link to='/login'><button>Login</button></Link> :
                    <Link to='/signup'><button>Sign Up</button></Link>
            }
        </header>
    );
}

export default Header;
