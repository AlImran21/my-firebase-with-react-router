import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useAuth } from 'react-firebase-hooks/auth';
import './Login.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [login, setLogin] = useState(false);

    const [confirmError, setConfirmError] = useState('');

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    // user create
    const [
        createUserWithEmailAndPassword,
        createUser,
        creteLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // for login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [loginUser, loginLoading, loginError] = useAuthState(auth);


    const handleFormInput = (event) => {
        userInfo[event.target.name] = event.target.value;

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo);

        if (userInfo.password !== userInfo.confirmPassword) {
            setConfirmError("Password can't match");
            return;
        }

        if (!login) {
            setConfirmError('');
            createUserWithEmailAndPassword(userInfo?.email, userInfo?.password);
        } else {
            signInWithEmailAndPassword(userInfo?.email, userInfo?.password);
        }

    }

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loginUser) {
        navigate(from, { replace: true });
    }


    return (
        <div className='w-25 d-block mx-auto border my-4 p-4'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-center mb-5'>
                    {login ? 'Login' : 'Register'}
                </h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onBlur={(event) => handleFormInput(event)} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={(event) => handleFormInput(event)} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {
                    !login
                    &&
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={(event) => handleFormInput(event)} name='confirmPassword' type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                }

                <p className='text-danger text-start'>{confirmError}</p>
                {
                    createError && <p className='text-danger'>{createError.message}</p>
                }
                {
                    createUser && <p className='text-success'>User create successfully</p>
                }
                {
                    user && <p className='text-success'>User login successfully</p>
                }
                
                <div className="mb-3 form-check">
                    <input onChange={() => setLogin(!login)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">{login ? "Login" : "Register"}</button>
            </form>
        </div>
    );
};

export default Login;