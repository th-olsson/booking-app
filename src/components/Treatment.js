import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function Treatment({ id, img, name, description, price, category, duration }) {
    const [treatmentInfo] = useState({
        id: id,
        name: name,
        description: description,
        price: price,
        duration: duration,
        category: category
    })

    const [loggedIn, setLoggedIn] = useState('')

    // Book-button modal open or closed
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const localLoggedIn = localStorage.getItem('loggedIn')
        const boolLoggedIn = JSON.parse(localLoggedIn)

        setLoggedIn(boolLoggedIn)
    }, [])

    return (
        // Card
        <article className="flex flex-col justify-evenly rounded-md shadow-md overflow-hidden text-center ">
            <img src="https://source.unsplash.com/random/500x400" alt='produktbild' />
            <div className="flex flex-col h-full justify-between">
                <h2 className="text-gray-900 text-lg pl-2 font-semibold">{name} </h2>
                <span className=" flex justify-around border py-2 text-gray-800 text-sm pl-2 font-semibold">
                    <p className="pr-1"><data value={price}>{price}kr </data></p>
                    <span className="text-gray-500">/</span>
                    <p className="">{duration}min</p>
                </span>

                <p className="px-2 py-1 ">{description}</p>

                {/* Modal - form for booking treatment*/}
                {isOpen &&
                    <Book name={treatmentInfo.name}
                        treatment_id={treatmentInfo.id}
                        price={treatmentInfo.price}
                        duration={treatmentInfo.duration}
                        closeModal={() => setIsOpen(false)}
                    />
                }

                {loggedIn ?
                    // Book button
                    <button onClick={() => setIsOpen(true)} className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded">Boka</button>
                    // Link to login if not online
                    : <Link to='/inloggning' className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded" >Boka</Link>
                }
            </div>
        </article >
    )
}

export default Treatment
