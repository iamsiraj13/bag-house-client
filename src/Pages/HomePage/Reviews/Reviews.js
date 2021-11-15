import React, { useEffect } from 'react';
import { useState } from 'react';

const Reviews = () => {
    const [reviews, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/add_review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (
        <section className="bg-primary text-light py-5">
            <div className="container">
                <h2 className="mb-4 text-center">Client Review</h2>
                <div className="row">
                    {
                        reviews.map(review => <div className="col-md-4 text-center mb-3  p-5 shadow shadow-lg">
                            <h3>{review.userName}</h3>
                            <p>{review.review}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;