import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <img className="logo" src="img/logo.png" alt="Logo"/>

                <ul className="navBar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>


            
        </header>
    );
}
  
  export default Header;