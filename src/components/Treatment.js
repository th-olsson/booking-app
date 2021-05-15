import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Treatment({ id, img, name, description, price, category, duration }) {
    const [treatmentInfo, seTreatmentInfo] = useState({
        id: id,
        name: name,
        description: description,
        price: price,
        category: category
    })

    const [loggedIn, setLoggedIn] = useState('')

    useEffect(() => {
        const localLoggedIn = localStorage.getItem('loggedIn')
        const boolLoggedIn = JSON.parse(localLoggedIn)

        setLoggedIn(boolLoggedIn)
    }, [])

    return (
        // Card
        <article className="flex flex-col justify-evenly rounded-md shadow-md overflow-hidden text-center ">
            <img src="https://source.unsplash.com/random/500x400" />
            <div className="flex flex-col h-full justify-between">
                <h2 className="text-gray-900 text-lg pl-2 font-semibold">{name} </h2>
                <span className=" flex justify-around border py-2 text-gray-800 text-sm pl-2 font-semibold">
                    <p className="pr-1"><data value={price}>{price}kr </data></p>
                    <span className="text-gray-500">/</span>
                    <p className="">{duration}min</p>
                </span>

                <p className="px-2 py-1 ">{description}</p>
                {loggedIn ?
                    // Book button
                    <button className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded" to={
                        {
                            pathname: `/boka/${name.toLowerCase()}-${id}`,
                            state: {
                                treatment_id: id,
                                name: name,
                                description: description,
                                price: price,
                                category: category,
                                duration: duration
                            }
                        }
                    }>Boka</button>
                    // Link to login if not online
                    : <Link to='/inloggning' className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded" >Boka</Link>
                }
            </div>
        </article>
    )
}

export default Treatment
