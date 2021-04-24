import Treatment from './Treatment'
import { useState } from 'react';

function Treatments({ category }) {

    // const treatmentCategory = category;
    console.log(category);

    const [treatments, setTreatments] = useState([
        {
            id: "test",
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
                <Treatment
                    key={id}
                    name={name}
                    description={description}
                    price={price}
                    // category={treatmentCategory}
                />)}
            {/* <h1>{treatmentCategory}</h1> */}


        </section>
    )
}


export default Treatments
