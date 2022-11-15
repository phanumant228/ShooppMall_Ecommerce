import React from 'react'

const Product = ({product, addToCart}) => {
  return (
    <div className='flex'>
        {
            product.map((item, index)=>{
                return(
                    <div style={{width:"33.33%"}}>
                        <div className='product-item'>
                            <div className='imgstyle'>
                            <img src={item.img} width="100%"/>
                            </div>
                            <div className='allstyle'>
                            <p>{item.name} | {item.seller}</p>
                            <p>Rs.{item.price} /-</p>
                            <button 
                            onClick={()=>addToCart(item)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product