import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div className='navarMainContainer'>
            <Link to="/Post-Classifieds" className='navbarTitle'>Add Product</Link>
            <Link to="/Browse-Classifieds" className='navbarTitle'> Show Product</Link>
        </div>
    )
}

export default NavBar