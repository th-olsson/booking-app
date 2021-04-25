import { useLocation } from 'react-router-dom'

function Book() {

    const bookingDetails = (useLocation().state);
    console.log(bookingDetails);
    const {name, category, description, id, price} = bookingDetails;

    function handleChange() {
        console.log('Form changed');
    }

    return (
        <form onChange={handleChange}>
            <h2>Boka {name} {price} sek</h2>
            <label htmlFor='text'>Ditt namn</label>
            <input type='text' name='text' />
            <label htmlFor='time'>Önskad tid</label>
            <input type='time' name='time' />
            <input type='tel' name='tel' placeholder='Telefonnummer' />
            <button>Bekräfta</button>
        </form>
    )
}

export default Book
