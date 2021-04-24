// import Booking from "./Booking";
import { Link } from 'react-router-dom'

function Treatment({ img, name, description, price, category }) {

    return (
        // Card
        <article>
            <img />
            <h2>{name} </h2>
            <p>{description}</p>
            <Link to={`/book/${name.toLowerCase()}`}>Boka</Link>
            <p><data value={price}>{price}</data>sek</p>
        </article>
    )
}

export default Treatment
