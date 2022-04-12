import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h3> plese register!!</h3>
            <form>
                <input type="text" placeholder="type your name" />
            <br/>
            < input type="email" placeholder='enter your '/><br/>
            <input type="password" placeholder='enter your password'/><br/>
            <input type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;