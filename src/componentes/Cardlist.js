import React, { useEffect, useState } from 'react'

const Cardlist = ({cart}) => {

    const [CART, setCART] = useState([])

    useEffect(()=>{
        setCART(cart)
    }, [cart])

  return (
    <div className='main'>
    <div>
        {
            CART?.map((cartItem, cartIndex)=>{
                return (
                    <div className='cardlist1'>
                        <img className='cardimag' src={cartItem.img} width={30} />
                        <div className='carddetail'>
                        
                        <div className='cardall'>
                        <span> {cartItem.name}   </span>
                        <button className='btn'
                            onClick={()=>{
                                const _CART = CART.map((item, index)=>{
                                    return cartIndex === index ? {...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0} : item
                                })
                                setCART(_CART)
                            }}
                        > - </button>
                        <span> {cartItem.quantity}   </span>
                        <button className='btn'
                            onClick={()=>{
                                const _CART = CART.map((item, index)=>{
                                    return cartIndex === index ? {...item, quantity: item.quantity + 1} : item
                                })
                                setCART(_CART)
                            }}
                        > + </button>
                        <span> Rs.{cartItem.price * cartItem.quantity}  </span>
                        </div>
                    </div>
                    </div>
                )
            })
        }
        
        
    </div>
    <div>
    <div className='Summary'>
        <div className='SummaryItem'>
            <h1>Total Amount</h1>
            <p> <h4>Total   : 
            {
                CART.map (item => item.price * item.quantity).reduce((total, value) => total+value, 0)
            }
            </h4>
        </p>
        <button className='btn2'>Process To Pay</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Cardlist