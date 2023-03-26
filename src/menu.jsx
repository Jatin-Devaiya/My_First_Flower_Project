import {Link, NavLink} from "react-router-dom";
import "./App.css"
const Menu = () =>
{
    return(
        <>
        <nav>
        
        <Link className="logo" to="/">My_Flower</Link>
        <div className="navbar1">
            <NavLink className="Link" to="/">Home</NavLink>
            <NavLink className="Link" to="about">About</NavLink>
            <NavLink className="Link" to="login">Login</NavLink>
            <NavLink className="Link" to="registration">Registration</NavLink>
        </div>
        </nav>
        </>
    )
}
export default Menu;