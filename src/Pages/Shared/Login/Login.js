import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    const {googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleGoogleLogin =()=>{
        googleSignIn(history, location)
    }
    return (
        <div className="container py-5">
            <div className="row">
                <h2 className="text-center mb-3">Please Login</h2>
                <div className="col-md-8 mx-auto">
                    <form>
                        <div className="mb-2">
                            <input type="text" name="" id="" className="form-control border border-primary"
                            placeholder="E-mail"
                            />
                        </div>
                        <div className="mb-2">
                            <input type="text" name="" id="" className="form-control border border-primary"
                            placeholder="Password"
                            />
                        </div>
                        <div className="mb-2">
                            <input type="submit" 
                            className=" btn border border-primary"
                            />
                        </div>

                    </form>
                    <div className="mt-4">
                        <button onClick={handleGoogleLogin} className="btn btn-primary">Google Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;