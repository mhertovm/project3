import { useParams } from 'react-router-dom';
import './Product.css'
import { useEffect, useState } from 'react';

function Product () {
  const {id} = useParams()

  const [data, setdata]=useState([]);
  useEffect(()=>{
      fetch("http://localhost:3001/shoes/"+id)
      .then(res=> res.json())
      .then(res=> setdata(res));
  },[])
  return (
  <div className="product">
    <p><img style={{width: 300, height: 300}} src={data.img}/></p>
    <p>{data.name}</p>
    <p>{data.price}</p>
    <p style={{width:500}}>{data.info}</p>
  </div>
  )
}


export default Product;