import React from 'react'
import Book from '../components/Book';

function BookTreatment({getBookingData}) {
    return (
        <Book returnToParent={getBookingData}/>
    )
}

export default BookTreatment;