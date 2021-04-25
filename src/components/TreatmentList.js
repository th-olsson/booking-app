import TreatmentCard from './TreatmentCard'
import { useState } from 'react';

function TreatmentList({ category }) {

    const [treatments] = useState([
        {
            id: 1,
            name: "Herrklippning",
            description: "20-45 minuter, inklusive tvätt & fön",
            price: 450,
            category: "hair"
        },
        {
            id: 2,
            name: "Damklippning",
            description: "30-60 minuter, inklusive tvätt & fön",
            price: 550,
            category: "hair"
        },
        {
            id: 3,
            name: "Färgning herr & dam",
            description: "1-2 timmar. Konsulation, tvätt och styling ingår",
            price: 3000,
            category: "hair"
        }
    ]);

    return (
        <section className='treatments'>

            {treatments.map(({ id, name, description, price }) =>
                <TreatmentCard 
                    key={id.toString()}
                    value={id}
                    name={name}
                    description={description}
                    price={price}
                    category={category}
                />)}

        </section>
    )
}


export default TreatmentList
