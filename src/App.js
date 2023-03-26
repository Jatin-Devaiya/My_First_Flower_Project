import {Route,Routes} from "react-router";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Menu from "./menu";
import Registration from "./registration";


function App() {
  return (
    <>
    <Menu/>
    
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="login" element ={<Login/>}/>
      <Route path="registration" element ={<Registration/>}/>
      
    </Routes>
    </>
  );
}

export default App;
