import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {


    const { googleSignIn ,loginUser} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password,history, location)
       
    };

    const handleGoogleLogin = () => {
        googleSignIn(history, location)
    }
    return (
        <div className="container py-5">
            <div className="row">
                <h2 className="text-center mb-3">Please Login</h2>
                <div className="col-md-8 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      
                        <div className="my-3">
                            <input {...register("email")}
                                type="email"
                                required
                                className="form-control"
                                placeholder="E-mail"
                            />
                        </div>
                        <div className="my-3">
                            <input {...register("password")}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <input type="submit" value="Login" className="btn btn-success" />
                    </form>
                    <div className="mt-4">
                        <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                    </div>
                    <p>
                        You don't have an account? <Link to="/registration">Register Here</Link>
                    </p>
                    <p className="text-center">
                        <Link to="/">Back To website</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;