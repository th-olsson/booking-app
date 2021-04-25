import TreatmentCard from './TreatmentCard'
import { useState } from 'react';

function TreatmentList({ category }) {

    const currentUrlCategory = category;

    //Example data
    const [treatments] = useState([
        {
            id: 1,
            name: "Herrklippning",
            description: "20-45 minuter, inklusive tvätt & fön",
            price: 450,
            category: "frisör"
        },
        {
            id: 2,
            name: "Damklippning",
            description: "30-60 minuter, inklusive tvätt & fön",
            price: 550,
            category: "frisör"
        },
        {
            id: 3,
            name: "Färgning herr & dam",
            description: "150 minuter. Konsulation, tvätt och styling ingår",
            price: 3000,
            category: "frisör"
        },
        {
            id: 4,
            name: "Microneedling",
            description: "60 minuter. Behandling för hela ansiktet med serum och mask",
            price: 800,
            category: "skönhet"
        },
        {
            id: 5,
            name: "Hårborttagning helkropp",
            description: "150 minuter. Hårborttagning med diodlaser för hela kroppen inklusive ansikte",
            price: 3000,
            category: "skönhet"
        },
        {
            id: 6,
            name: "LED-ljusterapi",
            description: "45 minuter. LED-ljusterapi med rengöring, passande mask och avslutande ekologisk kräm.",
            price: 650,
            category: "skönhet"
        },
        {
            id: 7,
            name: "Botox 1 område",
            description: "30 minuter. Välj mellan panna, glabella, kråksparkar, haka, bunnylines, lipflip, rökrynkor överläpp.",
            price: 2500,
            category: "skönhet"
        },
        {
            id: 8,
            name: "Vitamintest",
            description: "25 minuter. Vitastiq test ger dig svar på 26 näringsämnen och dess nivåer och vad du behöver för att balansera dessa.",
            price: 450,
            category: "skönhet"
        },
        {
            id: 9,
            name: "Pensionär dam",
            description: "30 minuter. Gäller endast ålderspensionär Vardagar 10:00 - 15:00",
            price: 290,
            category: "frisör"
        },
        {
            id: 10,
            name: "Pensionär herr",
            description: "30 minuter. Gäller endast ålderspensionär Vardagar 10:00 - 15:00",
            price: 240,
            category: "frisör"
        }


    ]);

    return (
        <section className='treatments'>
            {treatments.map(({ id, name, description, price, category }) =>

                currentUrlCategory === category &&
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
