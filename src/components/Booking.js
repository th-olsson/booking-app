function Booking({ value, treatment, time }) {
    return (
        <article className={`booking-${value}`}>
            <p>{treatment}</p>
            <p>KL. {time}</p>
            <button>Boka om</button>
            <button>Avboka</button>
        </article>
    )
}

export default Booking
