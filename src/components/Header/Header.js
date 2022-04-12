import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import {getAuth,signOut} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';



const auth=getAuth(app);
const Header = () => {
   const [user]=useAuthState(auth);
    return (
        <div className='header'>
          <span>{user?.dispalyName}</span> 
           <nav>
           <Link to="/">Home </Link>
           {
               user?.uid
                ?
               <button onClick={()=>signOut(auth)}>Sign out</button> 
               :
                <Link to="/login">Login</Link>
           }
            <Link to="/register">Register</Link>
            <Link  to="/order">order</Link>
            <Link to="/product">products</Link>
           </nav>
        </div>
    );
};

export default Header;