function Card({ img, name, description, price }) {
    return (
        <article>
            <img />
            <h2>{name} </h2>
            <p>{description}</p>
            <button>Boka</button>
            <p><data value={price}>{price}</data>sek</p>
        </article>
    )
}

export default Card
