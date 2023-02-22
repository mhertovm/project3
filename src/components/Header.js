import './Header.css';
import {Link} from 'react-router-dom';




function Header() {
    return (
        <header className="header">
            <Link to={"/"}><img className="logo" src="../img/logo.png" alt="Logo"/></Link>

            <div className="navBar">
                <Link to="/" className="link">Home</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>


            
        </header>
    );
}
  
  export default Header;