import { useState } from 'react'
import AdminTreatment from '../components/AdminTreatment'

function Admin() {

    // Add treatment modal open or closed
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main>
            {/* Admin panel */}
            <div className='flex justify-center'>

                {/* Modal - form for opening */}
                {isOpen &&
                    <>
                        <AdminTreatment
                            closeModal={() => { setIsOpen(false) }}
                            crudType={'create'}
                        />

                    </>
                }
                {/* Button to open  */
                    !isOpen &&
                    <button onClick={() => { setIsOpen(true) }} className="px-4 py-1 tracking-wide hover:bg-gray-100 border rounded">Lägg till behandling</button>
                }
            </div>
        </main>
    )
}

export default Admin
