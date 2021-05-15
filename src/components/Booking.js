function Booking({ id, name, tel, treatment_name, treatment_price, date, time, treatment_duration }) {
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
            {/* Buttons */}
            <div className='flex justify-evenly'>
                <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded">Boka om</button>
                <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-red-500 hover:bg-red-600 rounded">Avboka</button>
            </div>
        </article>
    )
}

export default Booking
