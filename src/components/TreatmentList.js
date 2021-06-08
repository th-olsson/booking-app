import Treatment from './Treatment'
import { useState, useEffect } from 'react'
import axios from 'axios'

function TreatmentList({ category }) {

    const currentUrlCategory = category
    // Stores treatments from db
    const [treatments, setTreatments] = useState([])
    const [isAdmin, setIsAdmin] = useState()

    // Get token from local storage
    const token = localStorage.getItem('jwt')

    useEffect(() => {
        // Get treatments from db
        axios.get('http://localhost:1337/treatments/')
            .then(response => {
                console.log(response.data)
                setTreatments(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
        // Get user info based on token
        if (token != null) {
            axios.get('http://localhost:1337/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((response) => {
                    console.log('User data: ', response.data)

                    if (response.data.role.name === 'Admin') {
                        setIsAdmin(true)
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [])

    return (
        <main>
            <h1 className='text-center text-2xl text-gray-800 my-5'>Behandlingar inom {category}</h1>

            {/* Treatment list */}
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {/* Treatments */}
                {treatments.map(({ id, image, name, description, price, category, duration }) =>
                    currentUrlCategory === category &&
                    <Treatment
                        key={id.toString()}
                        id={id}
                        image={image}
                        name={name}
                        description={description}
                        price={price}
                        category={category}
                        duration={duration}
                        token={token}
                        isAdmin={isAdmin}
                    />)}
            </section>
        </main>
    )
}

export default TreatmentList
