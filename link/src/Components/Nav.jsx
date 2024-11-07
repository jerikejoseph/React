import React from "react";
import { Link} from "react-router-dom"

const Nav=()=>{
    return(
        <div style={{width:"100%",height:"50px",backgroundColor:"blue",color:"white"}}>
            <span><Link to={"/"}>Home</Link></span>
            <span><Link to={"/about"}>About</Link></span>
        </div>
    )
}
export default Nav;