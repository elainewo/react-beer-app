import { Link } from 'react-router-dom';
import homeLogo from '../img/home-logo.png';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="home-btn" to="/">
                        <img src={homeLogo} alt="" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;