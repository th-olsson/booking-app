import Booking from "../components/Booking";

function Bookings({ bookingsList }) {

    console.log(bookingsList);
    console.log(typeof (bookingsList));

    return (
        <section className='flex flex-col items-center'>
            {bookingsList.map(({ treatmentId, treatment, time }) =>
                <Booking
                    key={treatmentId.toString()}
                    value={treatmentId}
                    treatment={treatment}
                    time={time}
                />
            )}
        </section>
    )
}

export default Bookings
