import { useState } from 'react';
import { useLocation } from 'react-router-dom'


function Book() {
    const treatmentDetails = (useLocation().state);
    const { name, category, description, id, price } = treatmentDetails;

    const [bookingDetails, setBookingDetails] = useState({
        treatmentId: id,
        name: '',
        time: '',
        tel: ''
    });

    console.log("initial booking details:");
    console.log(bookingDetails);

    function handleChange(e) {
        console.log("former booking details:");
        console.log(bookingDetails);

        const newBookingDetails = bookingDetails;

        const inputName = e.target.name;
        const inputValue = e.target.value;

        switch (inputName) {
            case "name":
                newBookingDetails.name = inputValue;
                break;
            case "time":
                newBookingDetails.time = inputValue;
                break;
            case "tel":
                newBookingDetails.tel = inputValue;
                break;
            default:
                console.log("No match");
                return;
        }

        console.log("new booking details:");
        console.log(newBookingDetails);

        setBookingDetails(newBookingDetails);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.text.value)
    }


    return (
        <>
            <h2>Boka {name} {price} sek</h2>
            <form onChange={handleChange} onSubmit={handleSubmit} method='post'>
                <label htmlFor='text'>Ditt namn</label>
                <input type='text' name='name' required />
                <label htmlFor='time'>Önskad tid</label>
                <input type='time' name='time' required />
                <input type='tel' name='tel' placeholder='Telefonnummer' />
                <button>Bekräfta</button>
            </form>
        </>
    )
}

export default Book
