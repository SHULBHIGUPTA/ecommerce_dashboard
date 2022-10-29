import React, { useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';


const Nav = () => {
   const auth = localStorage.getItem('user');
   const navigate = useNavigate();
   const logout = () => {
    localStorage.clear()
    navigate('/signup')
   }
    return (
        <div>
            {
                auth ? 
                <ul className="nav">
                <li><Link to='/'>Home Page</Link></li>
                <li><Link to='/add'>Add product</Link></li>
                <li><Link to='/update'>update product</Link></li>
                <li><Link to='/profile'>profile</Link></li>
                <li><Link to='/signup' onClick={logout}>Logout({JSON.parse(auth).name})</Link></li> 
                </ul>
                :
                   <ul className="nav nav-right">
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>login</Link></li>
                    </ul>
                   
            }
        </div>
    )
}

export default Nav;