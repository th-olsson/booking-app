import axios from "axios";
import { useEffect, useState } from "react";
import Booking from "../components/Booking";

function Bookings() {
    const [bookings, setBookings] = useState([])

    const token = localStorage.getItem('jwt')

    useEffect(() => {
        // Get user info based on token
        axios.get('http://localhost:1337/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                const user_id = response.data.id
                // Get bookings from db of logged in user
                axios.get(`http://localhost:1337/bookings?user=${user_id}`)
                    .then(response => {
                        console.log(response.data)
                        const newBookings = response.data
                        setBookings(newBookings)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })




    }, [])


    return (
        // Bookings list
        <section className='flex flex-col items-center'>
            <h1 className='text-2xl font-semibold text-gray-900'>Bokningar</h1>
            {bookings.map(({ id, name, tel, treatment, date, time, }) =>
                <Booking key={id.toString()}
                    id={id}
                    name={name}
                    tel={tel}
                    treatment_name={treatment.name}
                    treatment_price={treatment.price}
                    date={date}
                    time={time}
                    treatment_duration={treatment.duration}
                />
            )}
        </section>
    )
}

export default Bookings
