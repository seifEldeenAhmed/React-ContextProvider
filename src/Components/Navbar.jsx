import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
        
<nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to={"/"} >Home</Link>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/products/create'}>Add your product</Link>
        </li>
    </ul>
  </div>
</nav>

    </div>
  )
}
