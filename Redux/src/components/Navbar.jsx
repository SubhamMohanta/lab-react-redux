import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"pink",color:"black"}} >
            <Link to={"/"} >
                <h1>CONTENT</h1>
            </Link>
            <Link to={"/Cart"} >
                <h1>CART</h1>
            </Link>
        </div>
    )
}

export default Navbar