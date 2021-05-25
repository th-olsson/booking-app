import { useState, useEffect } from 'react'
import axios from 'axios'
import Book from './Book'

function Booking({ id, name, tel, treatment_id, treatment_name, treatment_price, date, time, treatment_duration }) {

    // Rebook-button modal open or closed
    const [isOpen, setIsOpen] = useState(false)

    function cancel() {
        // Remove booking from db
        axios.delete(`http://localhost:1337/bookings/${id}`)
            .then(res => {
                console.log(res)
                // Refresh page
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    return (
        // Booking card
        <article className='flex flex-col justify-center rounded-md shadow-md py-2 px-5 mb-7 text-gray-800 text-sm'>

            {/* Treatment info */}
            <div className="pl-2 font-semibold flex flex-col">
                <h3 className='font-bold text-base'>Behandling</h3>
                <p>{treatment_name}</p>
                <p>{treatment_duration} min</p>
                <p>{treatment_price} kr</p>
            </div>

            {/* Date & time info */}
            <div className="pl-2 font-semibold flex flex-col">
                <h3 className='font-bold text-base'>Datum och tid</h3>
                <p>{date}</p>
                <p>kl. {time}</p>
            </div>

            {/* Customer info */}
            <div className="py-2 pl-2 font-semibold flex flex-col">
                <h3 className='font-bold text-base'>Dina uppgifter</h3>
                <p>{name}</p>
                <p>{tel}</p>
            </div>

            {/* Modal - form for rebooking treatment*/}
            {isOpen &&
                <Book name={treatment_name}
                    treatment_id={treatment_id}
                    price={treatment_price}
                    duration={treatment_duration}
                    closeModal={() => setIsOpen(false)}
                    rebook={{id: id, name: name, tel: tel }}
                />
            }

            {/* Buttons */}
            <div className='flex justify-evenly'>
                <button onClick={() => setIsOpen(true)} className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded">Boka om</button>
                <button onClick={cancel} className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-red-500 hover:bg-red-600 rounded">Avboka</button>
            </div>
        </article>
    )
}

export default Booking
