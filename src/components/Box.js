import {Link} from 'react-router-dom';
import './Box.css'

function Box (props) {
    return (
        <div class="box">
        <Link to={"/product/" + props.id} class="box-link">
            <p><img src={props.img}/></p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </Link>
        </div>
    )
}
  
  export default Box;