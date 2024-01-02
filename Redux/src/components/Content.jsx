import React, { useEffect, useState } from 'react'
import axios from "axios"

const Content = () => {

  const [products, setProducts] = useState([])
  console.log("products:",products )
  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((res) =>{
      setProducts(res.data)
    })
  },[])
  return (
    <div>
      <h1>Store</h1>
      <div>
        {products.map((e,i) =>{
          return <div>
            <img src={e.image}/>
            <h2>{e.title}</h2>
            <h2>{e.price}</h2>
            <h2>⭐{e.rating.rate}</h2>
            <button>Add to cart</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default Content;