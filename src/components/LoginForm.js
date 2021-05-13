import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        const newFormData = formData

        const inputName = e.target.name
        const inputValue = e.target.value

        switch (inputName) {
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

    function loginUser(e) {
        e.preventDefault()

        axios.post('http://localhost:1337/auth/local', {
            identifier: formData.username,
            password: formData.password,
        })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);

                //Store user data in localStorage:
                localStorage.setItem('username', response.data.user.username)
                localStorage.setItem('email', response.data.user.email)

                //Store JWT in localStorage
                localStorage.setItem('jwt', response.data.jwt)

                //Set logged in status to true in localStorage
                localStorage.setItem('loggedIn', true)

                //Refresh page
                window.location.reload();
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }


    return (
        <div className='flex content-center place-content-center bg-gray-200'>
            <div className="flex flex-col rounded-lg shadow-lg my-20">
                <form onChange={handleChange} onSubmit={loginUser} className="flex flex-col space-evenly px-8 py-6">
                    <label className='text-s font-semibold px-1' htmlFor='username'>Användarnamn</label>
                    <input type='text' name='username' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'></input>
                    <label className='text-s font-semibold px-1' htmlFor='password'>Lösenord</label>
                    <input type='password' name='password' className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'></input>
                    <button className='border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full py-2 mt-2 rounded-lg focus:border-gray-700 hover:bg-purple-700'>Logga in</button>
                </form>

                <Link to='/registrering' className='text-xs text-center font-semibold pb-3'>Klicka här för att registrera dig</Link>
            </div>
        </div>
    )
}

export default LoginForm