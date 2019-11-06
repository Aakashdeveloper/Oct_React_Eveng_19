import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">Redux News App</Link>
                <Link to="/forms" className="btn btn-primary">Add Data</Link>
            </div>
        </header>
    )
}

export default Header;