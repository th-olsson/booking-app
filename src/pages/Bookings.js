import axios from "axios";
import { useEffect, useState } from "react";
import Booking from "../components/Booking";
// import { loadStripe } from '@stripe/stripe-js'

function Bookings() {
    const [bookings, setBookings] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    //Get jwt token from localStorage
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

                        // Calculate and set total price of current bookings
                        const prices = response.data.map((data) => data.treatment.price)
                        const sumOfPrices = prices.reduce((a, b) => a + b)
                        setTotalPrice(sumOfPrices)

                        // Set bookings
                        console.log(response.data)
                        setBookings(response.data)
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
            <h2 className='text-center text-2xl text-gray-800 my-5'>Bokningar</h2>
            <section className='text-center'>
                <p>Totala kostnaden för dina bokningar: {totalPrice}</p>
            </section>
            <section className='flex flex-col items-center'>
                {bookings.map(({ id, name, tel, treatment, date, time }) =>
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
