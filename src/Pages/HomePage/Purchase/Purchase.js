import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../../Hooks/useAuth';
import Nav from '../../Shared/Nav/Nav';

const Purchase = () => {

    const [singleProduct, setSinglesingleProduct] = useState({});
    const {user} = useAuth();
    const { purchaseId } = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    fetch('http://localhost:5000/placeOrder',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({...singleProduct,username:data.username,email:data.useremail, address:data.address})
    })
    .then(res=>res.json())
    .then(result => {
        if( result.insertedId){
            alert('data added successfully')
        }
    })
}

    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${purchaseId}`)
            .then(res => res.json())
            .then(data => setSinglesingleProduct(data))
    }, [purchaseId])



    return (
        <>
            <Nav></Nav>
            <div className="container">
                <h2>Place Your Order</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box mb-3 card">
                            <img classNam="img-fluid" src={singleProduct.productThumb} alt="" />
                            <div className="p-3">
                                <h3>{singleProduct.name}</h3>
                                <p>{singleProduct.desc}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="price">${singleProduct.price}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box mb-3">
                            <h3>User Information</h3>
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-2">
                                        <input {...register("username")} className="form-control border border-dark" placeholder="Name" defaultValue={user.displayName} />
                                    </div>
                                    <div className="mb-2">
                                        <input {...register("useremail")} className="form-control border border-dark" placeholder="E-mail" defaultValue={user.email} />
                                    </div>
                                    <div className="mb-2">
                                        <input {...register("address")} required className="form-control border border-dark" placeholder="Shipping Address" />
                                    </div>

                                    <input type="submit" className="btn btn-primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;