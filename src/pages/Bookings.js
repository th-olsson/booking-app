import axios from "axios";
import { useEffect, useState } from "react";
import Booking from "../components/Booking";
import { loadStripe } from '@stripe/stripe-js'

function Bookings() {
    const [bookings, setBookings] = useState([])

    //Get jwt token
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
        <main>
            <h1 className='text-2xl font-semibold text-gray-900 text-center'>Bokningar</h1>
            <section className='flex flex-col items-center'>
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
        </main>
    )
}

export default Bookings
