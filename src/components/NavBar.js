import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function NavBar() {
    const [loggedIn, setLoggedIn] = useState()
    const [isAdmin, setIsAdmin] = useState()

    // Get token from local storage
    const token = localStorage.getItem('jwt')

    useEffect(() => {
        const loggedInBool = JSON.parse(localStorage.getItem('loggedIn'))
        setLoggedIn(loggedInBool)

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

    function logOutUser(e) {
        e.preventDefault()
        //Clears localstorage and refresh page
        localStorage.clear()
        window.location.reload()
    }

    return (
        <nav className="px-2 flex flex-col align-end border">
            <ul className="flex justify-between">
                <div className="flex justify-between items-center">
                    <li className="px-2"><Link to='/'><img src="https://img.icons8.com/carbon-copy/45/000000/lotus.png" alt='logotyp' /></Link></li>
                    <li className="px-2 hover:bg-gray-100 rounded"><Link to='/behandling/frisör'>Frisör</Link></li>
                    <li className="px-2 hover:bg-gray-100 rounded"><Link to='/behandling/skönhet'>Skönhet</Link></li>
                </div>
                <div className="flex items-center">
                    {isAdmin &&
                        <li className="px-2 hover:bg-gray-100 rounded"><Link to='/admin'>Admin</Link></li>
                    }
                    {loggedIn ?
                        <>
                            <li className="px-2 hover:bg-gray-100 rounded"><Link to='/bokningar'>Mina bokningar</Link></li>
                            <li><button onClick={logOutUser} className='px-2 hover:bg-gray-100 rounded'>Logga ut</button></li>
                        </>
                        :
                        <li className="px-2 hover:bg-gray-100 rounded"><Link to='/inloggning'>Logga in</Link></li>
                    }
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
