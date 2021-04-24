import Treatment from './Treatment'
import { useState } from 'react';

function Treatments() {
    const [treatments, setTreatments] = useState([
        {
            name: "Herrklippning",
            description: "20-45 minuter, inklusive tvätt & fön",
            price: 450,
            category: "hair"
        },
        {
            name: "Damklippning",
            description: "30-60 minuter, inklusive tvätt & fön",
            price: 550,
            category: "hair"
        },
        {
            name: "Färgning herr & dam",
            description: "1-2 timmar. Konsulation, tvätt och styling ingår",
            price: 3000,
            category: "hair"
        }
    ]);

    return (
        <section className='treatments'>
            {treatments.map((treatment) => <Treatment name={treatment.name} description={treatment.description} price={treatment.price} category={treatment.category} /> )}
        </section>
    )
}


export default Treatments
