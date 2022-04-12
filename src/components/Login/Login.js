import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth=getAuth(app);
const Login = () => {
   const [signInWithGoogle ,user]=useSignInWithGoogle(auth);
    return (
        <div>
           <h1> this is login</h1> 

           <div>
               <button onClick={() => signInWithGoogle()  }>Google Sign In</button>
           </div>
           <form>
                
            < input type="email" placeholder='enter your '/><br/>
            <input type="password" placeholder='enter your password'/><br/>
            <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;