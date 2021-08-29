import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdminTreatment from './AdminTreatment'
import Book from './Book'
import axios from 'axios'

function Treatment({ id, image, name, description, price, category, duration, token, isAdmin }) {
    const [treatmentInfo] = useState({
        id: id,
        image: image,
        name: name,
        description: description,
        price: price,
        duration: duration,
        category: category
    })

    const [loggedIn, setLoggedIn] = useState('')

    // Book-button modal open or closed
    const [bookIsOpen, setBookIsOpen] = useState(false)

    // Update-button modal open or closed
    const [updateIsOpen, setUpdateIsOpen] = useState(false)

    useEffect(() => {
        const localLoggedIn = localStorage.getItem('loggedIn')
        const boolLoggedIn = JSON.parse(localLoggedIn)

        setLoggedIn(boolLoggedIn)
    }, [])

    const deleteTreatment = () => {

        axios.delete(`https://booking-app-strapi.herokuapp.com/treatments/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                // Refresh page
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        // Card
        <article className="flex flex-col justify-evenly rounded-md shadow-md overflow-hidden text-center">
            {treatmentInfo.image &&
                <img src={`${treatmentInfo.image.formats.small.url}`} alt='produktbild' className='object-cover h-56 w-full' />
            }
            <div className="flex flex-col h-full justify-between">
                <h2 className="text-gray-900 text-lg pl-2 font-semibold">{name} </h2>
                <span className=" flex justify-around border py-2 text-gray-800 text-sm pl-2 font-semibold">
                    <p className="pr-1"><data value={price}>{price}kr </data></p>
                    <span className="text-gray-500">/</span>
                    <p className="">{duration}min</p>
                </span>

                <p className="px-2 py-1 ">{description}</p>

                {/* Modal - form for booking treatment*/}
                {bookIsOpen &&
                    <Book name={treatmentInfo.name}
                        treatment_id={treatmentInfo.id}
                        price={treatmentInfo.price}
                        duration={treatmentInfo.duration}
                        closeModal={() => setBookIsOpen(false)}
                    />
                }

                {/* Modal - form for updating treatment */}
                {
                    updateIsOpen &&
                    <AdminTreatment
                        closeModal={() => setUpdateIsOpen(false)}
                        crudType={'update'}
                        treatmentInfo={treatmentInfo}
                    />
                }

                {loggedIn ?
                    // Book button
                    <div className='flex flex-col'>
                        <button onClick={() => setBookIsOpen(true)} className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 ">Boka</button>
                        {isAdmin &&
                            <div className='flex w-full justify-between'>
                                <button onClick={() => setUpdateIsOpen(true)} className="px-4 py-1 text-gray-50 tracking-wider bg-gray-700 hover:bg-gray-600  w-1/2">Ändra</button>
                                <button onClick={deleteTreatment} className="px-4 py-1 text-gray-50 tracking-wider bg-red-700 hover:bg-red-600  w-1/2">Ta bort</button>
                            </div>}
                    </div>
                    // Link to login if not online
                    : <Link to='/inloggning' className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded" >Boka</Link>
                }
            </div>
        </article >
    )
}

export default Treatment
