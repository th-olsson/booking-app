import { Link } from 'react-router-dom';

function NavBar() {
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
                    <li className="px-2 text-lg "><Link to='/inloggning'>Logga in</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar
