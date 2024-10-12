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
                <Link to="/genre/rock">Rock</Link>
                <Link to="/genre/metal">Metal</Link>
                <Link to="/genre/grunge">Grunge</Link>
                <Link to="/genre/funk_soul">Funk & Soul</Link>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default NavBar;
