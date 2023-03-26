import { useState } from "react";

const Login = () =>
{

    const [name,setname] =useState({
        username : "",
        pas : ""
    })
    const input = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setname( (pval)=>
        {
            return{
                ...pval,
                [name] : value
            }
        })
    }
    const [show,setshow] = useState(" ")
    const datashow = (evt) =>
    {
        evt.preventDefault()
        setshow(
            <table border={4} bgcolor={"lightgray"}>
                <tr>
                <th style={{background:"gray",color:"brown"}}>UserName</th>
                <th style={{background:"gray",color:"green"}}>Password</th>
                </tr>
                <tr>
                    <td>{name.username}</td>
                    <td>{name.pas}</td>
                </tr>
            </table>
        )
    }


    return(
        <>
    <center className="loginback">
        
         <h2 style={{color:"green",padding:"10px"}}>Welcome to My_Flower Login page</h2>
        
        <form className="form" onSubmit={datashow} >
            <h3 className="login">Login Form</h3>
            <label>UserName : </label>
            <input name="username" onChange={input} type="text" placeholder="Enter Your Name" required/><br/><br/><br/>
            <label>Password : </label>
            <input name="pas" onChange={input} type={"password"} placeholder="Enter Your Password" required/><br/><br/>
            <input className="btn" type={"reset"}></input>
            <input className="btn" type={"submit"}></input>
        </form>

        <h2>{show}</h2>
    </center>
        </>
    )
}
export default Login;