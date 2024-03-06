import { useMemo, useState, createContext, useEffect } from "react";
import axios from "axios";

const ProductsContext= createContext();
export const ProductsContextProvider=(props)=>{
    let {children}= props;
    let [prds,setPrds]=useState(null);
    let GetPrds=()=>{
        axios.get("http://localhost:2000/products")
        .then(res=>setPrds(res.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        GetPrds();
    },[])

    let DelPrds=(id)=>{
        axios.delete(`http://localhost:2000/products/${id}`)
        .then(res=>console.log(res))
        .catch(res=>console.log(res))
        setPrds(prds.filter(prds => prds.id !== id));
    }
    

    
    
    const ContextValue= useMemo(()=>({prds, GetPrds ,DelPrds}),[prds])
    return(
        <ProductsContext.Provider value={ContextValue}>
            {children}
        </ProductsContext.Provider>
    )
}


export default ProductsContext;