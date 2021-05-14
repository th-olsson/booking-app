import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Book({ returnToParent }) {
    const treatmentDetails = (useLocation().state);
    const { name, id, price, duration } = treatmentDetails;

    const [bookingDetails, setBookingDetails] = useState({
        treatment_id: id,
        treatment: name,
        duration: duration
    });

    // Form input states
    const [nameInput, setNameInput] = useState()
    const [dateInput, setDateInput] = useState()
    const [timeInput, setTimeInput] = useState()
    const [telInput, setTelInput] = useState()

    // List of all possible times
    const [possibleTimes, setPossibleTimes] = useState([
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00"
    ])

    // Should get data from appotinments-table in db - Temporary example data:
    const [unavailableTimes, setUnavailableTimes] = useState([])

    // Gets set with possible times with respect to unavailable times
    const [availableTimes, setAvailableTimes] = useState([])

    useEffect(() => {
        // Set date to current locale in yyyy-mm-dd
        const d = new Date()
        const currentDate = d.toLocaleDateString()
        setDateInput(currentDate)

        // Get unavailable times of current date (booked times of current date in booked appointments)
        axios.get(`http://localhost:1337/appointments?date=${currentDate}`)
            .then((response) => {
                console.log(response)
                const newUnavailableTimes = response.data.map(data => data.time)
                setUnavailableTimes(newUnavailableTimes)

                // Set available times by filtering out possible times with unavailable times
                const newAvailableTimes = possibleTimes.filter(possibleTime => !newUnavailableTimes.includes(possibleTime))
                setAvailableTimes(newAvailableTimes)

                // Set timeInput to first of possible time
                setTimeInput(newAvailableTimes[0])
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    // Input onChange handlers
    function nameChange(e) {
        const inputValue = e.target.value
        setNameInput(inputValue)
    }
    function dateChange(e) {
        const inputValue = e.target.value
        setDateInput(inputValue)

        // Update available times for selected date
        axios.get(`http://localhost:1337/appointments?date=${inputValue}`)
            .then((response) => {
                console.log(response)
                const newUnavailableTimes = response.data.map(data => data.time)
                setUnavailableTimes(newUnavailableTimes)

                // Set available times by filtering out possible times with unavailable times
                const newAvailableTimes = possibleTimes.filter(possibleTime => !newUnavailableTimes.includes(possibleTime))
                setAvailableTimes(newAvailableTimes)
                
                // Set timeInput to first of possible time
                setTimeInput(newAvailableTimes[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }
    function timeChange(e) {
        const inputValue = e.target.value
        setTimeInput(inputValue)
    }
    function telChange(e) {
        const inputValue = e.target.value
        setTelInput(inputValue)
    }

    // On submit
    function bookTreatment(e) {
        e.preventDefault();

        // Form data
        const formData = {
            name: nameInput,
            date: dateInput,
            time: timeInput,
            tel: telInput
        }

        // Complete appointment data (treatment details + form data)
        const appointmentData = {
            treatment_id: id,
            treatment: name,
            duration: duration,
            ...formData
        }

        // Submit appointment data to db
        axios.post('http://localhost:1337/appointments', appointmentData)
            .then((response) => {
                console.log(response)

                // Update page to reload available times (TEMPORARY SOLUTION. REDIRECT INSTEAD?)
                window.location.reload()    
            })
            .catch((err) => {
                console.log(err)
            })

        returnToParent(bookingDetails); // This will be replaced by db post
    }

    return (
        <div className='flex place-content-center'>
            <div className='flex flex-col justify-evenly rounded-md shadow-md py-2 px-5'>
                <form onSubmit={bookTreatment} className="flex flex-col h-full justify-between">
                    <h2 className="text-xl font-semibold pl-2">Boka {duration} min {name} {price}kr</h2>

                    {/* Name input */}
                    <label htmlFor='text' className="text-s font-semibold px-2 py-1">Ditt namn</label>
                    <input name='name'
                        id='name'
                        type='text'
                        required
                        onChange={nameChange}
                        value={nameInput}
                        className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                    >
                    </input>

                    {/* Date input */}
                    <label htmlFor='date' className="text-s font-semibold px-2 py-1">Välj datum</label>
                    <input name='date'
                        id='date'
                        type='date'
                        onChange={dateChange}
                        value={dateInput}
                    />
                    <label htmlFor='time' className="text-s font-semibold px-2 py-1">Vilken tid vill du börja behandlingen?</label>

                    {/* Time input */}
                    {<select name='time'
                        id='time'
                        onChange={timeChange}
                        value={timeInput}
                    >
                        {/* List options of available times */}
                        {availableTimes.map((availableTime) =>
                            <option value={availableTime}>
                                {availableTime}
                            </option>
                        )}
                    </select>}

                    {/* Tel input */}
                    <label htmlFor='tel' className="text-s font-semibold px-2 py-1">Telefonnummer</label>
                    <input name='tel'
                        id='tel'
                        type='tel'
                        onChange={telChange}
                        value={telInput}
                        className="border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg"
                    />

                    {/* Submit */}
                    <button className="px-4 py-2 mt-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded">Bekräfta</button>
                </form>
            </div>
        </div>
    )
}

export default Book