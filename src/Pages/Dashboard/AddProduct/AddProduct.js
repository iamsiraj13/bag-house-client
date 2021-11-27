import React from 'react';
import { useForm } from 'react-hook-form'; 

const AddProduct = () => { 
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch("https://fast-inlet-88656.herokuapp.com/add_product",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => console.log(result))

    };
    return (
        <div>
            <h2>Add Product From here</h2>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <input {...register("productThumb")}  className="form-control border border-dark " placeholder="Thumbnail Url"/>
                    </div>
                    <div className="mb-2">
                        <input {...register("name")}  className="form-control border border-dark " placeholder="Product Name"/>
                    </div>
                    <div className="mb-2">
                        <input {...register("desc")}  className="form-control border border-dark " placeholder="Product Description"/>
                    </div>
                    <div className="mb-2">
                        <input {...register("price")}  
                        type="number"
                        className="form-control border border-dark " placeholder="Product Price"/>
                    </div>
                    
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;