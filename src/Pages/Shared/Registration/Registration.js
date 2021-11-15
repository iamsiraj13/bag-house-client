import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {
    const { registerUser } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        registerUser(data.email, data.password, data.name)
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto card mt-5">
                    <h2>Please Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-3">
                            <input {...register("name")}
                                className="form-control"
                                placeholder="Name"
                                required
                            />
                        </div>
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
                        <div className="my-3">
                            <input {...register("password2")}
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                required
                            />
                        </div>

                        <input type="submit" value="Register" className="btn btn-success" />
                    </form>
                    <p>Already Registered?? <Link to="/login">Login Here</Link></p>
                    <p className="text-center">
                        <Link to="/">Back To website</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;