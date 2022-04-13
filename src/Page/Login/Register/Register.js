import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useCreateUserWithEmailAndPassword(auth);

const handleRegister = e => {
    e.preventDefault()
    // const name = e.target.name.value;
    const email = e.target.email.value;
    // const number = e.target.number.value;
    const password = e.target.password.value;

    // createUserWithEmailAndPassword(email, password)
}

    return (
        <div className='register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Enter your name' required/>
                <hr />
                <input type="email" name="email" id="email" placeholder='Enter your Email' required/>
                <hr />
                <input type="number" name="number" id="number" placeholder='Enter your Number' required/>
                <hr />
                <input type="password" name="password" id="password" placeholder='Enter your Password' required/>
                <hr />
                <input className='bg-primary text-white' type="submit" value="Register" />
                <p className='mt-3'>Already have an account ? <Link to="/login" className='text-danger text-decoration-none' >Login</Link></p>
            </form>
        </div>
    );
};

export default Register;