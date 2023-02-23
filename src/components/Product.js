import { useParams } from 'react-router-dom';
import Data from '../data/Data';
import './Product.css'

function Product () {
  const {id} = useParams()
const prodId=Data[id-1]

  return (
  <div className="product">
    <p><img src={prodId.img}/></p>
    <p>{prodId.name}</p>
    <p>{prodId.price}</p>
    <p style={{width:500}}>{prodId.info}</p>
  </div>
  )
}


export default Product;