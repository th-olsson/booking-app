// import Booking from "./Booking";

function Card({ img, name, description, price }) {

    function handleClick(e) {
        console.log('Button clicked');
    }

    return (
        <article>
            <img />
            <h2>{name} </h2>
            <p>{description}</p>
            <button onClick={handleClick}>Boka</button>
            <p><data value={price}>{price}</data>sek</p>
        </article>
    )
}

export default Card
