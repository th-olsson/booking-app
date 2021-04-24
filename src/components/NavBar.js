import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                {/* <li><svg></svg></li> logo*/}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hair'>Frisör</Link></li>
                <li><Link to='/beauty'>Skönhet</Link></li>
                <li><Link to='/bookings'>Mina bokningar</Link></li>
                <li><Link to='/login'>Login/logout</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
