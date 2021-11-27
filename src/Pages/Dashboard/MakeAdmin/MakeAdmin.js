import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState("")


    const handleOnBlue=(e)=>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = (e)=>{
        const user = {email}
        fetch('https://fast-inlet-88656.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
        })

        e.preventDefault();
    }
    return (
        <div>
             <form onSubmit={handleAdminSubmit}>
                 <div className="mb-2">
                     <input onBlur={handleOnBlue} type="text" className="form-control border border-dark" placeholder="Enter Email" />
                     
                 </div>
                 <div>
                     <input type="text" type="submit" value="Submit" className=" btn btn-primary" />
                 </div>
             </form>
        </div>
    );
};

export default MakeAdmin;