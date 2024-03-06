import ProductContext from "../ContextApis/ProductsContext.jsx";
import { useContext, React, useState, useEffect } from "react";
import { Link } from "react-router-dom"

export const Products = () => {
    let { prds, GetPrds,DelPrds } = useContext(ProductContext);
    
    useEffect(()=>{
        GetPrds()
    },[])

    return (
        <div>
            <h1>
                Products List
            </h1>


            <div className="row">
                {
                    prds ? (prds.map((p) => {
                        return (
                            <div key={p.id} className="col-12 col-md-4 border border-secondary">
                                <img src={p.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">this product Costs {p.price} and we have {p.quantity} in stock</p>
                                    <div className="d-flex">
                                        <button onClick={()=>DelPrds(p.id)} className="btn btn-danger m-3">Delete</button>
                                        <Link to={`products/edit/${p.id}`} className="btn btn-warning m-3">Edit</Link>
                                        <Link to={`products/${p.id}`} className="btn btn-primary m-3">Show</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (<div>Loading</div>)
                }
            </div>

        </div>
    )
}
