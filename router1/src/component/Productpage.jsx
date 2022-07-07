import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Productpage = () => {
    const params=useParams()
    const [data,setdata]=useState({})
    console.log(params)
    useEffect(()=>{
      axios.get("http://localhost:8080/data"+`/${params.product_id}`).then((res)=>setdata(res.data))
    },[])
    console.log(data)
  return (
    <div>
        <h2>Product :-{data.name}</h2>
        <h3>Price :-{data.price}</h3>
        <Link to="/product/:product_id/details">Show More</Link>
        <div></div>
        <Link to="/product">Go Back</Link>
    </div>
  )
}

export default Productpage