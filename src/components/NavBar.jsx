import logo from '../assets/logo.png';
import CartWidget from './CartWidget';

function NavBar ()
{
    return (
        <nav>
            <img src={logo} className="logo" alt="Kali Records logo" />
            <h1>Kali Records</h1>
            <ul>
                <li>Rock</li>
                <li>Metal</li>
                <li>Grunge</li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
