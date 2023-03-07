import {Link} from 'react-router-dom';
import './Box.css'
let click=1
function Box (props) {

    return (
        <div className="box" >
        <Link to={"/shoes/" + props.id} className="box-link">
            <p><img className='imgsize' src={props.img}/></p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </Link> 
        <button className='btn' onClick={props.handleClick}><img className='btnicon' src='../img/buyicon.png'/>Add to cart</button>     
        </div>
    )
}
  
  export default Box;