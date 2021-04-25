import Booking from "../components/Booking";
import { useState } from 'react';

function Bookings({bookingDetails}) {
    const [myBookings, setMyBookings] = useState([]);
    
    function addBooking(bookingDetails) {
        
    }

    return (
        <section>
            <h1>Mina bokningar</h1>
            <Booking />
        </section>
    )
}

export default Bookings
