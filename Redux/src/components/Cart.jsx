import React from 'react'

const Cart = () => {

  var cart = [];
  //extract cart data from store(redux)


  
  return (
    <div>
      <h1>Cart</h1>
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

export default Cart