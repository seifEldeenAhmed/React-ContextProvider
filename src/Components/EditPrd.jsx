import React,{useEffect , useState, useCallback} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export const EditPrd = () => {
    let navigate=useNavigate();
    const {id}= useParams();
    let [Prd, setPrd] = useState({})
    let GetPrdById = () => {
        axios.get(`http://localhost:2000/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setPrd(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        GetPrdById()
    }, [])
    
    let updPrd=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:2000/products/${id}`,Prd)
        .then((res)=>
        {
            console.log("product updated successfully: ",res.data);
            setPrd(res.data);
            navigate(`/products/${id}`)
        })
        .catch(err=>console.log(err.message))
    }   
    let HandleChange = useCallback((e) => {
        console.log(e)
        const { name, value } = e.target;
        setPrd((old) => ({
            ...old,
            [name]: value
        }))
    })
    return (
        <div>
        <h1>Edit Existing Product</h1>
        <form action="" onSubmit={updPrd} >
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name" name="name" value={Prd.name} onChange={HandleChange} />
                <label for="floatingInput">Product Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Image" name="imgUrl" value={Prd.imgUrl} onChange={HandleChange} />
                <label for="floatingInput">Product Image</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Price" name="price" value={Prd.price} onChange={HandleChange} />
                <label for="floatingInput">Product Price</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Quantity" name="quantity" value={Prd.quantity} onChange={HandleChange} />
                <label for="floatingInput">Product Quantity</label>
            </div>
            <button className="btn btn-dark">Submit</button>
        </form>

    </div>
  )
}
