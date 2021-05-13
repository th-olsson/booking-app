import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [jwt, setJwt] = useState('')

    useEffect(() => {
        setJwt(localStorage.getItem('jwt'))
        console.log(jwt);
        console.log(localStorage.getItem('jwt'))

    }, [])

    function logOutUser(e) {
        e.preventDefault()
        //Clears localstorage and refresh page
        localStorage.clear()
        window.location.reload()
    }

    return (
        <nav className="bg-white px-8 py-1 flex flex-col">
            <ul className="flex justify-between">
                <div className="flex justify-between items-center">
                    <li className="px-2 text-lg"><Link to='/'><img className src="https://img.icons8.com/bubbles/50/000000/star.png" /></Link></li>
                    <li className="px-2 text-lg"><Link to='/behandling/frisör'>Frisör</Link></li>
                    <li className="px-2 text-lg"><Link to='/behandling/skönhet'>Skönhet</Link></li>
                </div>
                <div className="flex items-center">
                    <li className="px-2 text-lg"><Link to='/admin'>Admin</Link></li>
                    <li className="px-2 text-lg"><Link to='/bokningar'>Mina bokningar</Link></li>

                    {jwt ?
                        <li><button onClick={logOutUser} className='px-2 text-lg'>Logga ut</button></li>
                        :
                        <li className="px-2 text-lg "><Link to='/inloggning'>Logga in</Link></li>
                    }
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
