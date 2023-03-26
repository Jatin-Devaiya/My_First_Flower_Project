import { Link } from "react-router-dom";
const Propscard = (props) =>
{
    return(
        <>
        <section className="container">
        <div className="card">
            <img className="card-image" src={props.img}/>
            <h3>{props.name}</h3>
            <p>{props.p}</p>
            <Link className="readmore" to={props.link}>Read More</Link>
        </div>
        </section>
        </>
    )
}
export default Propscard;