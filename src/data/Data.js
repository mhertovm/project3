import { useEffect, useState } from 'react';


function Data (){
    const [data, setdata]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001")
        .then(res=> res.json())
        .then(res=> setdata(res));
    },[])
    return data
}


export default Data
