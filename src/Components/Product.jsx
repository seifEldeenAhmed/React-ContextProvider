import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const Product = () => {
    const { id } = useParams();
    let [prd, setPrd] = useState({})
    const showDetail = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then(res => setPrd(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        showDetail();
    }, [])
    return (
        <>
            <div>
                <h1>Product Details</h1>
                <div className='row justify-content-center'>

                <div className="card col-6" >
                    <img src={prd.imgUrl} className="card-img-top" alt="..." width="300px" height="300px" />
                    <div className="card-body">
                        <h5 className="card-title">{prd.name}</h5>
                        <p className="card-text">{prd.quantity}</p>
                        <p className="card-text">{prd.price}</p>
                        <Link to="/" className="btn btn-dark">Go to Products</Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
