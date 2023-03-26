import { useState } from "react";
const Registration = () =>
{
    const [name,setname] =useState({
        username : "",
        gender : "",
        email : "",
        pas : "",
    })
    const input = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
    
        setname( (pval)=>
        {
            return{
                ...pval,
                [name] : value,
               
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
                <th style={{background:"gray",color:"brown"}}>Gender</th>
                <th style={{background:"gray",color:"brown"}}>Email</th>
                <th style={{background:"gray",color:"green"}}>Password</th>
                </tr>
                <tr>
                    <td>{name.username}</td>
                    <td>{name.gender}</td>
                    <td>{name.email}</td>
                    <td>{name.pas}</td>
                </tr>
            </table>
        )
    }


    return(
        <>
    <center className="loginback">
        
         <h2 style={{color:"green",padding:"10px"}}>Welcome to My_Flower Registration page</h2>
        
        <form className="form" onSubmit={datashow} >
            <h3 className="login">Registration Form</h3>
            <label>UserName : </label>
            <input onChange={input} name="username"  type="text" placeholder="Enter Your Name" required/><br/><br/>
            <label>Gender : </label>
            <input onChange={input} type="radio" name="gender"/> <label for="male">Male </label>
            <input onChange={input} type="radio" name="gender"/> <label for="female"> Female</label>
            <br/><br/>
            <label>Email : </label>
            <input onChange={input} name="email" type="email" placeholder="Enter Your Email"/><br/><br/>
            <label>Password : </label>
            <input onChange={input} name="pas" type={"password"} placeholder="Enter Your Password" required/><br/><br/>
            <input className="btn" type={"reset"}></input>
            <input className="btn" type={"submit"}></input>
        </form>

        <h2>{show}</h2>

    </center>
        </>
    )
}
export default Registration;