import React from 'react'; 
import { useForm } from 'react-hook-form'; 

const AddReview = () => {  
    const { register, handleSubmit } = useForm(); 
    const onSubmit = data => { 

         fetch("https://fast-inlet-88656.herokuapp.com/add_review",{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(result => {
            if(result.insertedId){
                alert('Data added Successfully done')
            }

         })
    };
    return (
        <div>
        <h2>Add Review From here</h2>

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <div className="mb-2">
                    <input {...register("userName")}  className="form-control border border-dark " placeholder="Author Name" />
                </div>
                <div className="mb-2">
                <textarea  {...register("review",  {required: true})} className="form-control border border-dark " />
                </div> 
                
                <input type="submit" />

                
            </form>
        </div>
    </div>
    );
};

export default AddReview;