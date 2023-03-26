
import Propscard from "./propscard";
import Arr from "./arr";

const Home = () =>
{
    return(
        <>
            <div className="title">
            <h1 className="wel"> Welcome To My Wev Page</h1>
            </div>


            {Arr.map((item)=>{
                return(
                    <>
                        <Propscard 
                            img={item.img}
                            name={item.name}
                            p={item.p}
                            link={item.link}
                         />
                         
                    </>
                )
            })}
           
        </>
    )
}
export default Home;