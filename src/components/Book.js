import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios'

function Book({ name, treatment_id, price, duration, closeModal, rebook }) {

    const [user_id, setUser_id] = useState()

    // Replace with treatments-table from db
    const [bookingDetails] = useState({
        treatment: treatment_id,
        duration: duration
    });

    // Form input states
    const [nameInput, setNameInput] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [timeInput, setTimeInput] = useState('')
    const [telInput, setTelInput] = useState('')

    // List of all possible times
    const [possibleTimes] = useState([
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00"
    ])

    // Gets set with possible times with respect to unavailable times
    const [availableTimes, setAvailableTimes] = useState([])

    // Get token from local storage
    const token = localStorage.getItem('jwt')

    useEffect(() => {

        // If modal is used in rebook, prepare with same name and tel values
        if (rebook != null) {
            setNameInput(rebook.name)
            setTelInput(rebook.tel)
        }

        // Set date to current locale in yyyy-mm-dd
        const d = new Date()
        const currentDate = d.toLocaleDateString()
        setDateInput(currentDate)

        // Get unavailable times of current date (booked times of current date in booked bookings)
        axios.get(`http://localhost:1337/bookings?date=${currentDate}`)
            .then((response) => {
                console.log(response)
                const unavailableTimes = response.data.map(data => data.time)

                // Set available times by filtering out possible times with unavailable times
                const newAvailableTimes = possibleTimes.filter(possibleTime => !unavailableTimes.includes(possibleTime))
                setAvailableTimes(newAvailableTimes)

                // Set timeInput to first of possible time
                setTimeInput(newAvailableTimes[0])
            })
            .catch((err) => {
                console.log(err)
            })

        // Get user info based on token
        axios.get('http://localhost:1337/users/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response.data.id)
                setUser_id(response.data.id)
            })
            .catch(error => {
                console.log(error)
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
        axios.get(`http://localhost:1337/bookings?date=${inputValue}`)
            .then((response) => {
                console.log(response)
                const unavailableTimes = response.data.map(data => data.time)

                // Set available times by filtering out possible times with unavailable times
                const newAvailableTimes = possibleTimes.filter(possibleTime => !unavailableTimes.includes(possibleTime))
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

        // Complete booking data (booking details + form data)
        const bookingData =
        {
            ...bookingDetails,
            ...formData,
            user: user_id
        }

        //Submit data to db

        if (rebook) {
            // Update booking
            axios.put(`http://localhost:1337/bookings/${rebook.id}`, bookingData)
                .then((response) => {
                    console.log(response)

                    // Refresh page
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // Create booking
            axios.post('http://localhost:1337/bookings', bookingData)
                .then((response) => {
                    console.log(response)

                    // Refresh page
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    // Render modal to portal
    return createPortal(

        <div className='modal-overlay'>
            <div className='modal flex justify-center rounded-md shadow-md'>

                {/* Form to book treatment*/}
                <form onSubmit={bookTreatment} className="flex flex-col my-4 mx-5">
                    <h2 className="text-xl font-semibold pl-2">Boka {duration} min {name} {price}kr</h2>

                    {/* Name input */}
                    <label htmlFor='text' className="text-s font-semibold px-2 py-1">Ange namn</label>
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
                            <option value={availableTime} key={availableTime}>
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
                    <button className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded py-2 mt-2">Bekräfta bokning</button>
                    <button onClick={closeModal} className="px-4 py-1 text-gray-50 tracking-wider bg-gray-700 hover:bg-gray-600 rounded py-2 mt-2">Avbryt</button>
                </form>
            </div>
        </div>,
        // Portal root to render to
        document.getElementById('portal')
    )
}

export default Book