import { useState } from 'react';
import { useLocation } from 'react-router-dom'

function Book({ returnToParent }) {
    const treatmentDetails = (useLocation().state);
    const { name, id, price } = treatmentDetails;

    const [bookingDetails, setBookingDetails] = useState({
        treatmentId: id,
        treatment: name,
        name: '',
        time: '',
        tel: ''
    });

    console.log("initial booking details:");
    console.log(bookingDetails);

    function handleChange(e) {
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

        setBookingDetails(newBookingDetails);
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log('Data to submit:');
        console.log(bookingDetails);

        returnToParent(bookingDetails);
    }

    return (
        <>
            <h2>Boka {name} {price} sek</h2>
            <form onChange={handleChange} onSubmit={handleSubmit}>
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