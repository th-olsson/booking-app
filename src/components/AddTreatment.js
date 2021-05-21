import React, { useState } from 'react'
import axios from 'axios'

function AddTreatment() {
    //Get this data from database
    const categories = ['frisör', 'skönhet']

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '',
        price: '',
        category: categories[0]
    })

    function handleChange(e) {
        const newFormData = formData

        const inputName = e.target.name
        const inputValue = e.target.value

        switch (inputName) {
            case 'name':
                newFormData.name = inputValue
                break;
            case 'description':
                newFormData.description = inputValue
                break;
            case 'price':
                newFormData.price = inputValue
                break;
            case 'category':
                newFormData.category = inputValue
                break;
            case 'duration':
                newFormData.duration = inputValue
                break;
            default:
                break;
        }

        // Update form data state
        setFormData(newFormData)
    }

    function handleSubmit(e) {
        e.preventDefault()

        // Submit new treatment to database
        axios.post('http://localhost:1337/treatments/', formData)
            .then((formData) => {
                console.log(formData)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <h2 className='text-xl font-semibold pl-2 text-center'>Lägg till ny behandling</h2>
            <div className='flex place-content-center'>
                <div className='flex flex-col justify-evenly rounded-md shadow-md py-2 px-5'>
                    <form onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
                        {/* Select category */}
                        <label htmlFor='category' className="text-s font-semibold px-2 py-1">Välj kategori</label>
                        <select id='category' name='category' className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'>
                            {categories.map((category) =>
                                <option value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                            )}
                        </select>
                        {/* Name */}
                        <label htmlFor='category' className="text-s font-semibold px-2 py-1">Namnge behandlingen</label>
                        <input required type='text' name='name' id='name' className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'></input>
                        {/* Description */}
                        <label htmlFor='description' className="text-s font-semibold px-2 py-1">Beskrivning</label>
                        <textarea name='description' id='description' className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg' />
                        {/* Duration */}
                        <label htmlFor='duration' className="text-s font-semibold px-2 py-1">Antal minuter</label>
                        <input required name='duration' id='duration' type='number' min='5' step='5' max='300' className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'></input>
                        {/* Price */}
                        <label htmlFor='price' className="text-s font-semibold px-2 py-1">Pris</label>
                        <input required name='price' id='price' type='number' min='0' className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'></input>
                        {/* Submit */}
                        <button className='px-4 py-2 mt-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'>Lägg till behandling</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTreatment
