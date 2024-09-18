import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';

function NavBar ()
{
    return (
        <nav>
            <img src={logo} className="logo" alt="Kali Records logo" />
            <h1>Kali Records</h1>
            <ul>
                <Link to="/rock">Rock</Link>
                <Link to="/metal">Metal</Link>
                <Link to="/grunge">Grunge</Link>
                <Link to="/funk_soul">Funk & Soul</Link>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
