import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import axios from 'axios'

function AddTreatment({ closeModal, crudType, treatmentInfo }) {
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

        if (crudType === 'update') {
            setCategory(treatmentInfo.category)
            setName(treatmentInfo.name)
            setDescription(treatmentInfo.description)
            setDuration(treatmentInfo.duration)
            setPrice(treatmentInfo.price)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const formData = {
            category: category,
            name: name,
            description: description,
            duration: duration,
            price: price
        }

        if (crudType === 'create') {
            axios.post('http://localhost:1337/treatments', formData)
                .then(res => {
                    console.log(res)
                    const data = new FormData()

                    data.append("files", image)
                    data.append("ref", "treatment")
                    data.append("refId", res.data.id)
                    data.append("field", "image")

                    axios.post("http://localhost:1337/upload", data)
                        .then((e) => {
                            console.log(e)
                        })
                        .catch((e) => console.log(e))

                    // Refresh page
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        } else if (crudType === 'update') {
            axios.put(`http://localhost:1337/treatments/${treatmentInfo.id}`, formData)

                .then(res => {
                    console.log(res)
                    const data = new FormData()

                    data.append("files", image)
                    data.append("ref", "treatment")
                    data.append("refId", res.data.id)
                    data.append("field", "image")

                    axios.post("http://localhost:1337/upload", data)
                        .then((e) => {
                            console.log(e)
                        })
                        .catch((e) => console.log(e))

                    // Refresh page
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        }
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

    return createPortal(
        <>
            <div className='modal-overlay'>
                <div className='modal flex justify-center rounded-md shadow-md py-4 px-5'>

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
                        <button className='px-4 py-2 mt-2 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded'>
                            {crudType === 'create' && 'Lägg till behandling'}

                            {crudType === 'update' && 'Uppdatera behandling'}
                        </button>
                        {/* Close modal */}
                        <button onClick={closeModal} className="px-4 py-1 text-gray-50 tracking-wider bg-gray-700 hover:bg-gray-600 rounded py-2 mt-2">Avbryt</button>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default AddTreatment
