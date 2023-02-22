import './Header.css';
import {Link} from 'react-router-dom';




function Header(props) {
    return (
        <header className="header">
            <div className="navBar">
                <Link to={"/"}><img className="logo" src="../img/logo.png" alt="Logo"/></Link>
                <Link to="/" className="link">Home</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
            <div className="cart">
                <img className='buyicon' src='../img/buyicon.png'/>
                <span>{props.count}</span>
            </div>
        </header>
    );
}
  
  export default Header;