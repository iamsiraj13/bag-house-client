import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const Dashboard = () => {
    const { user,logOut, admin } = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const handleLogout=()=>{
        
        logOut(history)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="sidebar bg-dark text-light p-3" style={{ height: '100vh' }}>
                        <div className="profile mb-3">
                            <div className="dash-profile">
                                <img src={user?.photoURL} alt="" />
                                <h3 className="text-center">{user.displayName}</h3>
                            </div>
                        </div>
                        <ul className="dashboard-menu">
                            <li> <Link to={`${url}`}>Dashboard</Link></li>
                            {
                                admin && 
                                <li> <Link to={`${url}/addProduct`}>Add Product</Link></li>
                            }
                            <li> <Link to={`${url}/addReview`}>Add Review</Link></li>
                            <li> <Link to={`${url}/myorder`}>My Order</Link></li>
                            {
                                admin &&
                                <li> <Link to={`${url}/manageproduct`}>Mangage Product</Link></li>
                            }
                            <li> <Link to={`${url}/pay`}>Pay</Link></li>
                            { admin &&
                            <li> <Link to={`${url}/makeadmin`}>Make Admin</Link></li>
                            }
                            <li> <button className="btn btn-outline-light m-3" onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="content p-5">
                        <Switch>
                            <Route exact path={`${path}`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <Route path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/manageproduct`}>
                                <ManageProduct></ManageProduct>
                            </Route>
                            <Route path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;