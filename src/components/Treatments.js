import Card from './Card'
import { useState } from 'react';

function Treatments() {
    const [treatments, setTreatments] = useState([
        {
            name: "Herrklippning",
            description: "Mellan 15-30 minuter, inklusive tvätt & fön",
            price: 450
        },
        {
            name: "Damklippning",
            description: "Mellan 30-60 minuter, inklusive tvätt & fön",
            price: 550
        },
        {
            name: "Färgning herr & dam",
            description: "Mellan 1-2 timmar. Konsulation, tvätt och styling ingår",
            price: 3000
        }
    ]);

    return (
        <section className='treatments'>
            {treatments.map((treatment) => <Card name={treatment.name} description={treatment.description} price={treatment.price} /> )}
        </section>
    )
}

export default Treatments
