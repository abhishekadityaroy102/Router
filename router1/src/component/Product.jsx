import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom'
const active={
    color:"aqua",
    textDecoration:"none"
    }
    const basestyle={
      color:"black",
      textDecoration:"none"
    }
const Product = () => {
    const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/data").then((res)=>setdata(res.data))
    
  },[])

  return (
    <div>
        {
            data.map((el)=>
            <div><NavLink style={({isActive})=>(isActive ? active:basestyle)} to={`/product/${el.id}`}>{el.name}</NavLink>
            </div>)
        }
    </div>
  )
}

export default Product