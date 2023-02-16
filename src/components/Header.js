import './Header.css';
import {Routes,  Route,  Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            {/* <img className="logo" src="img/logo.png" alt="Logo" /> */}
            <nav className="navBar">
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>

            
        </header>
    );
}
  
  export default Header;