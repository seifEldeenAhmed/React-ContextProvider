import './App.css';
import { ProductsContextProvider } from "./ContextApis/ProductsContext";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Products } from "./Components/Products";
import { AddPrd } from "./Components/AddPrd";
import { Product } from "./Components/Product";
import { EditPrd } from "./Components/EditPrd";
import { Navbar } from "./Components/Navbar";

// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <ProductsContextProvider>
        <div className='Container'>
            <Routes>
              <Route path='/' element={<Products/>}/>
              <Route path='/products/create' element={<AddPrd/>}/>
              <Route path='products/:id' element={<Product/>}/>
              <Route path='products/edit/:id' element={<EditPrd/>}/>
            </Routes>
        </div>
      </ProductsContextProvider>

    </BrowserRouter>
    </>
  );
}

export default App;
