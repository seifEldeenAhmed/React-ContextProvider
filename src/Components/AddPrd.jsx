import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const AddPrd = () => {
    let nav=useNavigate();
    let [Prd,setPrd] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });
    let HandleChange = useCallback((e) => {
        console.log(e)
        const { name, value } = e.target;
        setPrd((Prd) => ({
            ...Prd,
            [name]: value
        }))
    });
    let AddNewPrd = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:2000/products`,Prd)
        .then((res)=>
        {
            console.log(res.data)
            nav('/')
        })
        .catch(err=>console.log(err.message))
    }

    return (
        <div>
            <h1>Add New Product</h1>
            <form action="" onSubmit={AddNewPrd} >
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" name="name" onChange={HandleChange} />
                    <label >Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Image" name="imgUrl"  onChange={HandleChange} />
                    <label >Product Image</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="Price" name="price" onChange={HandleChange} />
                    <label >Product Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="Quantity" name="quantity"  onChange={HandleChange} />
                    <label >Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>
    )
}
