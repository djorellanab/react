import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/api">Api</Link>
                </li>
                <li>
                    <Link to ="/greeting">Greeting</Link>
                </li>
                <li>
                    <Link to ="/form">Form</Link>
                </li>
                <li>
                    <Link to ="/simplestate">Simple State</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;