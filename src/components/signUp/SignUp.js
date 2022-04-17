import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/googleLogo.png'

const SignUp = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-primary mt-5'>Sign Up</h2>
                <form className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label"> Re-Enter Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Re-enter Password' />
                    </div>

                    <button type="submit" class="btn btn-primary ps-5 pe-5 d-block mx-auto">Sign Up</button>
                    <p>Already have an Account? Please <Link to="/logIn">LogIn</Link> </p>

                </form>
                <div className='d-flex w-50 mx-auto '>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                    <p className='mt-1 mx-1'>Or</p>
                    <div style={{ height: '1px' }} className='w-50 bg-secondary mx-auto mt-3'></div>
                </div>
                <button className='btn btn-primary d-block mx-auto'>
                    <img style={{ height: '25px', width: '25px' }} className='me-1' src={logo} alt="" />
                    Google SignUp </button>

            </div>
        </div>
    );
};

export default SignUp;