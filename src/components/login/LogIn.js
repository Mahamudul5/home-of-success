import React from 'react';
import { } from 'react-bootstrap';

const LogIn = () => {
    return (
        <div>
            <h2 className='text-center text-primary mt-5'>logIn</h2>
            <form className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' />
                </div>

                <button type="submit" class="btn btn-primary ps-5 pe-5 d-block mx-auto">LogIn</button>

            </form>
            <div className='d-flex w-50 mx-auto '>
                <div style={{ height: '1px' }} className='w-50 bg-primary mx-auto mt-3'></div>
                <p className='mt-1 mx-1'>Or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary mx-auto mt-3'></div>
            </div>
        </div>
    );
};

export default LogIn;