import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../../Hooks/useAuth';
const MyOrder = () => {
    const { user } = useAuth();
    const [myorders, setMyorder] = useState([]);


    const deleteOrder =(id)=>{
        const url = `https://fast-inlet-88656.herokuapp.com/deleteOrder/${id}`;
        fetch(url,{
            method:'DELETE'

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }

    useEffect(() => {
        const url = `https://fast-inlet-88656.herokuapp.com/placeOrder?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyorder(data))
    }, [user.email]) 


    return (
        <div>
            <h2>Your All Orders</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>


                    {
                        myorders.map(myorder => <tr key={myorder._id}>
                            <td>{myorder.name}</td>
                            <td>{myorder.username}</td>
                            <td>{myorder.address}</td>
                            <td>${myorder.price}</td>
                            <td><button onClick={()=>deleteOrder(myorder._id)}  className="btn btn-danger btn-sm">Cancel</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};


export default MyOrder;