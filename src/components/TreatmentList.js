import Treatment from './Treatment'
import { useState, useEffect } from 'react'
import axios from 'axios'

function TreatmentList({ category }) {

    const currentUrlCategory = category
    // Stores treatments from db
    const [treatments, setTreatments] = useState([])

    useEffect(() => {
        // Get treatments from db
        axios.get('http://localhost:1337/treatments/')
            .then(response => {
                // Set fetched data to state
                setTreatments(response.data)
                // Log fetched data
                console.log(response.data)
            })
            .catch((err) => {
                // Log error message
                console.log(err)
            })
    }, [])

    return (
        <main>
            <h1 className='text-center text-2xl font-semibold text-gray-900'>Behandlingar inom {category}</h1>
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {treatments.map(({ id, name, description, price, category, duration }) =>

                    currentUrlCategory === category &&
                    <Treatment
                        key={id.toString()}
                        id={id}
                        name={name}
                        description={description}
                        price={price}   
                        category={category}
                        duration={duration}
                    />)}
            </section>
        </main>
    )
}

export default TreatmentList
