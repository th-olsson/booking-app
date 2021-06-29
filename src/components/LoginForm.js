import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function LoginForm() {
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    function usernameChange(e) {
        const inputValue = e.target.value
        setUsernameInput(inputValue)
    }

    function passwordChange(e) {
        const inputValue = e.target.value
        setPasswordInput(inputValue)
    }

    function loginUser(e) {
        e.preventDefault()

        const formData = {
            username: usernameInput,
            password: passwordInput
        }

        axios.post('http://localhost:1337/auth/local', {
            identifier: formData.username,
            password: formData.password
        })
            .then(response => {
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);

                // Set user data in localStorage:
                localStorage.setItem('username', response.data.user.username)
                localStorage.setItem('email', response.data.user.email)

                // Set JWT in localStorage
                localStorage.setItem('jwt', response.data.jwt)

                // Set logged in status to true in localStorage
                localStorage.setItem('loggedIn', true)

                // Refresh page
                window.location.reload();
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }

    return (
        <div className='flex content-center place-content-center'>
            <div className="flex flex-col rounded-lg shadow-lg my-20">
                <form onSubmit={loginUser} className="flex flex-col space-evenly px-8 py-6">

                    {/* Username input*/}
                    <label className='text-s font-semibold px-1' htmlFor='username'>Användarnamn</label>
                    <input name='username'
                        id='username'
                        type='text'
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'
                        value={usernameInput}
                        onChange={usernameChange}
                    />

                    {/* Password input */}
                    <label htmlFor='password' className='text-s font-semibold px-1'>Lösenord</label>
                    <input name='password'
                        id='password'
                        type='password'
                        className='px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none'
                        value={passwordInput}
                        onChange={passwordChange}
                    />

                    {/* Submit */}
                    <button className='border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full py-2 mt-2 rounded-lg focus:border-gray-700 hover:bg-purple-700'>Logga in</button>
                </form>

                {/* Link to register page */}
                <Link to='/registrering' className='text-xs text-center font-semibold pb-3'>Klicka här för att registrera dig</Link>
            </div>
        </div>
    )
}

export default LoginForm