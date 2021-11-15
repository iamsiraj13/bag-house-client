import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add_product')
            .then(res => res.json())
            .then(data =>{
                const  newData = data.slice(0,8);
                setProducts(newData)
            })
    }, [])

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Our Featured Products</h2>
            <div className="row">
                {
                    products.map(product => <div key={product._id} className="col-md-3">
                        <div className="box mb-3 card">
                            <img classNam="img-fluid" src={product.productThumb} alt="" />
                            <div className="p-3">
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="price">${product.price}</p>
                                    <Link to={`/purchase/${product._id}`}><button className="btn btn-primary">
                                        BUY NOW
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Products;