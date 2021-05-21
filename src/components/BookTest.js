import React, { useState } from 'react'

function BookTest() {
    const [date, setDate] = useState('2021-05-14')

    function handleChange(e) {
        // const dateInput = e.target.value

        // setDate(dateInput)
    }

    return (
        <input type='date' value={date} onChange={handleChange}>

        </input>
    )
}

export default BookTest
