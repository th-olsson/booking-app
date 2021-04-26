import { Link } from 'react-router-dom'

function TreatmentCard({ value, img, name, description, price, category }) {
    return (
        // Card
        <article className="flex flex-col justify-evenly rounded-md shadow-md overflow-hidden">
            <img src="https://source.unsplash.com/random/500x400" />
            <div className="flex flex-col h-full justify-between">
                <h2 className="text-gray-750 text-lg pl-2 font-semibold">{name} </h2>
                <p className=" px-2 py-1">{description}</p>
                <span className=" flex justify-around py-2">
                    {/* Book-button */}
                    <Link className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" to={
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
                    <p className="text-xl"><data value={price}>{price}</data> SEK</p>
                </span>
            </div>
        </article>
    )
}

export default TreatmentCard
