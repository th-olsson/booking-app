import { Link } from 'react-router-dom'

function TreatmentCard({ value, img, name, description, price, category }) {
    return (
        // Card
        <article className={value}>
            {/* <img /> */}
            <h2>{name} </h2>
            <p>{description}</p>
            <Link to={
                {
                    pathname: `/boka/${name.toLowerCase()}-${value}`,
                    state: {
                        id: value,
                        name: name,
                        description: description,
                        price: price,
                        category: category
                    }
                }
            }>Boka</Link>
            <p><data value={price}>{price}</data>sek</p>
        </article>
    )
}

export default TreatmentCard
