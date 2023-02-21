import {Link} from 'react-router-dom';
import './Box.css'

function Box (props) {
    return (
        <div className="box">
        <Link to={"/product/" + props.id} className="box-link">
            <p><img src={props.img}/></p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </Link>
        </div>
    )
}
  
  export default Box;