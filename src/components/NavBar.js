import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                {/* <li><svg></svg></li> logo*/}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/behandling/frisör'>Frisör</Link></li>
                <li><Link to='/behandling/skönhet'>Skönhet</Link></li>
                <li><Link to='/bokningar'>Mina bokningar</Link></li>
                <li><Link to='/inloggning'>Login/logout</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
