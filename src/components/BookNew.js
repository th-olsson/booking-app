import React, { useState, useEffect } from 'react'

function BookNew() {
    const [dates, setDates] = useState('')

    //Lenght of treatment. Should be passed in from treatment details. This example is length in minutes
    const treatmentLength = '00:60:00'
    const timeInterval = ''

    //30 minutes
    // const time = Date.parse('01 Jan 1970 00:30:00 GMT') / 1000 / (60)


    //custom minutes
    // Date.parse('01 Jan 1970 00:{custom}:00 GMT') / 1000 / (60)

    const d = new Date()

    useEffect(() => {
        console.log('test')
        // console.log(timeIntervalDigital("15:00", 120))
        // console.log(digitalToMilliseconds())
    }, [])

    function showInterval(treatmentLength, availableTime) {

        return d.setMinutes("10:40" + "30")
    }

    function minToMillisec(minutes) {
        //Max minutes on day = 1440 = 24 hours = 00:00
        if (minutes <= 1440) {
            const seconds = minutes * 60
            const milliseconds = seconds * 1000
            return milliseconds
        } else {
            console.log("Can't convert more than 24 hours to digital")
        }
    }

    const timeMinutes = 840;

    function timeIntervalDigital(initialDigital = "14:00", durationMinutes = "90"){

        const initialInMilliseconds = digitalToMilliseconds(initialDigital)
        const durationInMilliseconds = minToMillisec(durationMinutes)

        const combinedMilliseconds = initialInMilliseconds + durationInMilliseconds

        const newUTC = millisecondsToUTC(combinedMilliseconds)

        const newDigital = UTCToDigitalTime(newUTC);
        
        return `${initialDigital}-${newDigital}`
    }

    function digitalToMilliseconds(digital = "14:00") {
        return Date.parse(`01 Jan 1970 ${digital}:00 GMT`)
    }

    function UTCToMilliseconds(UTC){
        // const UTC = UTC;
    }

    function millisecondsToUTC(milliseconds) {
        const UTC = new Date(milliseconds)
        return UTC.toUTCString()
    }

    function UTCToDigitalTime(UTCString) {
        return UTCString.slice(17, 22)
    }

    // Placeholder for database data. Admin should manage available times
    const [availableTimes, setAvailableTimes] = useState([
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
        "18:00", "18:30"
    ])

    return (
        <div className='flex place-content-center'>
            {/* <h1>{time}</h1> */}
            <h1>{timeIntervalDigital("08:00", 30)}</h1>
            {/* <h1>{`${timeMinutes} minuter. ${minToMillisec(timeMinutes)} millisekunder. Digital tid: ${UTCToDigitalTime(millisecondsToUTC(minToMillisec(timeMinutes)))}`}</h1> */}
            <div className='flex'>
                {/* <label htmlFor='time'>Välj tid:</label> */}
                {/* <label htmlFor='time'>Vilken tid vill du börja din behandling?:</label>
                <select id='time'>
                    {availableTimes.map((availableTime) => {
                        return <option>{availableTime}</option>
                    }
                    )}
                </select> */}
            </div>
        </div>
    )
}

export default BookNew
