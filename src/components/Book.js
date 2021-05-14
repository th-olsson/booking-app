import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Book({ returnToParent }) {
    const treatmentDetails = (useLocation().state);
    const { name, id, price, duration } = treatmentDetails;

    const [bookingDetails, setBookingDetails] = useState({
        treatment_id: id,
        treatment: name,
        name: '',
        time: '',
        tel: ''
    });

    // List of all possible times
    const [possibleTimes, setPossibleTimes] = useState([
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00"
    ])

    // Should get data from appotinments-table in db - Temporary example data:
    const [unAvailableTimes, setUnAvailableTimes] = useState([
        "09:30", "10:00", "10:30", "14:00"
    ])

    const [availableTimes, setAvailableTimes] = useState([
    ])

    useEffect(() => {
        // Filter out possible times by unavailable times
        const newAvailableTimes = possibleTimes.filter(possibleTime => !unAvailableTimes.includes(possibleTime))

        //Set available times
        setAvailableTimes(newAvailableTimes)
    }, [])

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

    function bookTreatment(e) {
        e.preventDefault();

        console.log('Data to submit:');
        console.log(bookingDetails);

        //Submit appointment data to db

        axios.post('http://localhost:1337/appointments', {
            name: bookingDetails.name,
            tel: bookingDetails.tel,
            time: bookingDetails.time,
            treatment_id: bookingDetails.treatment_id
        })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })

        returnToParent(bookingDetails); //This will be replaced by db post
    }

    return (
        <div className='flex place-content-center'>
            <div className='flex flex-col justify-evenly rounded-md shadow-md py-2 px-5'>
                <form onChange={handleChange} onSubmit={bookTreatment} className="flex flex-col h-full justify-between">
                    <h2 className="text-xl font-semibold pl-2">Boka {duration} min {name} {price}kr</h2>
                    <label htmlFor='text' className="text-s font-semibold px-2 py-1">Ditt namn</label>
                    <input type='text' name='name' required className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg' />
                    <label htmlFor='time' className="text-s font-semibold px-2 py-1">Vilken tid vill du börja behandlingen?</label>
                    {<select name='time' id='time' className>
                        {availableTimes.map((availableTime) =>
                            <option value={availableTime}>{availableTime}</option>
                        )}
                    </select>}
                    <label htmlFor='time' className="text-s font-semibold px-2 py-1">Telefonnummer</label>
                    <input type='tel' name='tel' className="border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg" />
                    <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">Bekräfta</button>
                </form>
            </div>
        </div>
    )
}

export default Book