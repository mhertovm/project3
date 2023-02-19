import {useParams} from 'react-router-dom';
import { Data } from '../data/Data';

function Product () {
  const {id} = useParams()
const prodId=Data[id]
  return (
  <div>
    <><img src={prodId.img}/></>
    <p>{prodId.name}</p>
    <p>{prodId.price}</p>
    <p>{prodId.info}</p>
  </div>
  )
}


export default Product;