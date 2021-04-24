// import Booking from "./Booking";
import { Link } from 'react-router-dom'

function Treatment({ id, img, name, description, price, category }) {

    return (
        // Card
        <article className={id}>
            {/* <img /> */}
            <h2>{name} </h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <Link to={`/book/${id}`}>Boka</Link>
            <p><data value={price}>{price}</data>sek</p>
        </article>
    )
}

export default Treatment
