import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AddTreatment() {
    // Note: Get this data from database instead of hard-coded?
    const categories = ['frisör', 'skönhet']

    // States for form inputs
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)

    useEffect(() => {
        setCategory(categories[0])
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const formData = {
            category: category,
            name: name,
            description: description,
            duration: duration,
            price: price,
            image: image
        }

        // Submit new treatment to database
        axios.post('http://localhost:1337/treatments', formData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    // onChange handlers for form inputs:
    function categoryChange(e) {
        setCategory(e.target.value)
    }
    function nameChange(e) {
        setName(e.target.value)
    }
    function descriptionChange(e) {
        setDescription(e.target.value)
    }
    function durationChange(e) {
        setDuration(e.target.value)
    }
    function priceChange(e) {
        setPrice(e.target.value)
    }
    function imageChange(e) {
        const file = e.target.files[0]
        setImage(file)
    }

    return (
        <>
            <h2 className='text-xl font-semibold pl-2 text-center'>Lägg till ny behandling</h2>
            <div className='flex place-content-center'>
                <div className='flex flex-col justify-evenly rounded-md shadow-md py-2 px-5'>
                    <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">

                        {/* Select category */}
                        <label htmlFor='category' className="text-s font-semibold px-2 py-1">Välj kategori</label>
                        <select name='category'
                            id='category'
                            className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                            onChange={categoryChange}
                            value={category}
                        >
                            {/* Categories */}
                            {categories.map((category) =>
                                <option value={category} key={category}>
                                    {// Category name with first letter capitalized
                                        category.charAt(0).toUpperCase() + category.slice(1)
                                    }
                                </option>
                            )}
                        </select>

                        {/* Name */}
                        <label htmlFor='name' className="text-s font-semibold px-2 py-1">Namnge behandlingen</label>
                        <input name='name'
                            id='name'
                            type='text'
                            required
                            className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                            value={name}
                            onChange={nameChange}
                        />

                        {/* Description */}
                        <label htmlFor='description' className="text-s font-semibold px-2 py-1">Beskrivning</label>
                        <textarea name='description'
                            id='description'
                            className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                            value={description}
                            onChange={descriptionChange}
                        />

                        {/* Duration */}
                        <label htmlFor='duration' className="text-s font-semibold px-2 py-1">Antal minuter</label>
                        <input name='duration'
                            id='duration'
                            type='number'
                            required
                            min='5' step='5' max='300'
                            className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                            value={duration}
                            onChange={durationChange}
                        />

                        {/* Price */}
                        <label htmlFor='price' className="text-s font-semibold px-2 py-1">Pris</label>
                        <input name='price'
                            id='price'
                            type='number'
                            required
                            min='0'
                            className='border-2 border-gray-200 focus:outline-none py-1 px-4 rounded-lg'
                            value={price}
                            onChange={priceChange}
                        />

                        {/* Image - File upload */}
                        <label htmlFor='image' className="text-s font-semibold px-2 py-1">Bild</label>
                        <input name='image'
                            id='image'
                            type='file'
                            onChange={imageChange}
                        />

                        {/* Submit */}
                        <button className='px-4 py-2 mt-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'>Lägg till behandling</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTreatment
