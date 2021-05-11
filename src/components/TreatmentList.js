import Treatment from './Treatment'
import { useState, useEffect } from 'react';
import axios from 'axios';

function TreatmentList({ category }) {

    const currentUrlCategory = category;

    const [treatments, setTreatments] = useState([]);

    // Get treatments from db
    useEffect(() => {
        axios.get('http://localhost:1337/treatments/')
            .then(response => {
                setTreatments(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {/* <h1>Behandlingar inom {category}</h1> */}
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {treatments.map(({ id, name, description, price, category, duration }) =>

                    currentUrlCategory === category &&
                    <Treatment
                        key={id.toString()}
                        value={id}
                        name={name}
                        description={description}
                        price={price}
                        category={category}
                        duration={duration}
                    />)}
            </section>
        </>
    )
}

export default TreatmentList
