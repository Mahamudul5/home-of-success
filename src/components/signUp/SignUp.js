import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/googleLogo.png'
import './signUp.css'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const reEnterpasswordRef = useRef('');
    const submitForm = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const reEnterpassword = reEnterpasswordRef.current.value;
        // console.log(email, password, reEnterpassword);
        createUserWithEmailAndPassword(email, password);
    }
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    if (errorGoogle) {
        return (
            <div>
                <p>Error: {errorGoogle.message}</p>
            </div>
        );
    }
    if (loadingGoogle) {
        return <p>Loading...</p>;
    }
    if (userGoogle) {
        navigate('/');
    }
    return (
        <div className='sign-up'>
            <div>
                <h2 className='text-center text-primary mt-5'>Sign Up</h2>
                <form onSubmit={submitForm} className='w-50 mx-auto'>
                    <div className="mb-3">
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className="mb-3">
                        <input ref={reEnterpasswordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Re-enter Password' />
                    </div>

                    <button type="submit" className="btn btn-primary ps-5 pe-5 d-block mx-auto">Sign Up</button>
                    <p>Already have an Account? Please <Link to="/logIn">LogIn</Link> </p>

                </form>
                <div className='d-flex w-50 mx-auto '>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                    <p className='mt-1 mx-1'>Or</p>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                </div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto'>
                    <img style={{ height: '25px', width: '25px' }} className='me-1' src={logo} alt="" />
                    Google SignUp </button>

            </div>
        </div>
    );
};

export default SignUp;