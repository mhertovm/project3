import {Link} from 'react-router-dom';
import './Box.css'
let click=1
function Box (props) {
function minmaxclick(){
    if(click===1){
        click = 0
        return(
            props.handleClick()
        )
    } else {
        click = 1
        return(
            props.minclick()
        )
    }
}
    return (
        <div className="box">
        <Link to={"/product/" + props.id} className="box-link">
            <p><img src={props.img}/></p>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </Link> 
        <button className='btn' onClick={minmaxclick}><img className='btnicon' src='../img/buyicon.png'/>Add to cart</button>     
        </div>
    )
}
  
  export default Box;