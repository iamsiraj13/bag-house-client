import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Nav = () => {
    const history = useHistory();
    const {logOut,user} = useAuth(); 
    const handleHeaderLogout=()=>{
        logOut(history);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">BAG HOUSE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/explore">Explore</Link>
                            </li>
                            { !user?.email &&
                            <button className="nav-item btn btn-warning btn-sm">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                            </button>
                            }
                            { user?.email &&
                            <li className="nav-item btn btn-warning btn-sm">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                            }
                            { user?.email &&
                            <button className="btn btn-outline-light btn-sm ms-3 dropdown ">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.email && user.displayName}
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <button onClick={handleHeaderLogout} className="dropdown-item" >LogOut</button>
                                    </li>
                                </ul>
                            </button>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;