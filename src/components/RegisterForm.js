import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegisterForm() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const [registerSuccess, setRegisterSuccess] = useState('')
    const [userData, setUserData] = useState({
        username: '',
        email: ''
    })

    function handleChange(e) {
        const newFormData = formData

        const inputName = e.target.name
        const inputValue = e.target.value

        switch (inputName) {
            case "email":
                newFormData.email = inputValue
                break
            case "username":
                newFormData.username = inputValue
                break
            case "password":
                newFormData.password = inputValue
                break
            default:
                console.log("No match")
                return
        }

        setFormData(newFormData);
    }

    function registerUser(e) {
        e.preventDefault()

        // Submit new user to database
        axios.post('http://localhost:1337/auth/local/register', formData)
            .then((response) => {
                console.log(response)
                setRegisterSuccess(true);
                setUserData({
                    username: response.data.user.username,
                    email: response.data.user.email
                })

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            {      registerSuccess ?
                <div className='text-center'>
                    <h2>Tack för att du har registrerat dig {userData.username}</h2>
                    <Link to='/inloggning'>Klicka här för att logga in</Link>
                </div> :

                <div className='flex content-center place-content-center'>
                    <div className="flex flex-col rounded-lg shadow-lg my-20">
                        <form onChange={handleChange} onSubmit={registerUser} className="flex flex-col space-evenly px-8 py-6">
                            <label className='text-s font-semibold px-1' htmlFor='email'>E-mail</label>
                            <input type='email' name='email' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'></input>
                            <label className='text-s font-semibold px-1' htmlFor='username'>Användarnamn</label>
                            <input type='text' name='username' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'></input>
                            <label className='text-s font-semibold px-1' htmlFor='password'>Lösenord</label>
                            <input type='password' name='password' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'></input>
                            <button className='border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full py-2 mt-2 rounded-lg focus:border-gray-700 hover:bg-purple-700'>Registrera</button>
                        </form>
                    </div>
                </div>}
        </>
    )
}
export default RegisterForm
