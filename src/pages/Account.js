import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Account() {

    const [userData, setUserData] = useState({
        email: '',
        id: ''
    })

    const [userDataDisplay, setUserDataDisplay] = useState({
        username: '',
        email: ''
    })

    // Get token from local storage
    const token = localStorage.getItem('jwt')

    useEffect(() => {
        // Get user info from db
        axios.get(`https://booking-app-strapi.herokuapp.com/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {

                setUserDataDisplay({
                    ...userData,
                    username: response.data.username,
                    email: response.data.email,
                })

                setUserData({
                    ...userData,
                    id: response.data.id
                })

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function updateUserData(e) {
        e.preventDefault();

        axios.put(`https://booking-app-strapi.herokuapp.com/users/${userData.id}`, { email: userData.email }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                // Fetch new email and update state
                axios.get(`https://booking-app-strapi.herokuapp.com/users/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((response) => {
                        setUserDataDisplay({...userDataDisplay, email: response.data.email})
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function deleteUser(e) {
        e.preventDefault();

        axios.delete(`https://booking-app-strapi.herokuapp.com/users/${userData.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .catch((err) => {
                console.log(err)
            })

        localStorage.clear()
        window.location.reload()
    }

    function changeEmail(e) {
        const inputValue = e.target.value
        setUserData({ ...userData, email: inputValue })
    }

    return (
        <main>
            <h2 className='text-center text-2xl text-gray-800 my-5'>Mitt konto</h2>
            <section className='flex flex-col items-center'>
                <p>Kontonamn: {userDataDisplay.username}</p>
                <p>Epost: {userDataDisplay.email}</p>

                <h3 className="text-xl font-semibold pl-2">Ändra uppgifter</h3>
                <form className="flex flex-col">
                    <label>E-post</label>
                    <input className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                        value={userData.email}
                        onChange={changeEmail}
                    />
                    <button onClick={updateUserData} className="px-4 py-1 text-gray-50 tracking-wider bg-green-700 hover:bg-green-600 rounded py-2 mt-2">Submit</button>
                </form>

                <button onClick={deleteUser} className="px-4 py-1 text-gray-50 tracking-wider bg-red-700 hover:bg-red-600 rounded py-2 mt-2">Ta bort konto</button>
            </section>
        </main>
    )
}

export default Account
