import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm() {
    const [formData, setFormData] = useState({

    })


    return (
        <div className='flex content-center place-content-center bg-gray-200'>
            <div className="flex flex-col rounded-lg shadow-lg my-20">
                <form className="flex flex-col space-evenly px-8 py-6">
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