import axios from "axios";
import { useEffect, useState } from "react";
import Booking from "../components/Booking";

function Bookings() {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        //Get appoinments from db of logged in user
        axios.get('http://localhost:1337/appointments')
            .then(response => {
                console.log(response.data)
                const newBookings = response.data
                setBookings(newBookings)
            }
            )
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <section className='flex flex-col items-center'>
            {bookings.map(({ id, name, tel, treatment, price, date, time, duration }) =>
                <Booking key={id.toString()}
                    id={id}
                    name={name}
                    tel={tel}
                    treatment={treatment}
                    price={price}
                    date={date}
                    time={time}
                    duration={duration}
                />
            )}
        </section>
    )
}

export default Bookings
