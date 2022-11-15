import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
const Navbar = (props) => {
    return (
        <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'>
                    <span className='Language'><LocalFloristIcon /></span>
                    <div className='SearchContainer'>
                        <input className='Input' placeholder='search'></input>
                    </div>
                </div>
                <div className='Center'>
                    <h1 className='Logo'>SHOPPMALL</h1>
                </div>
                <div className='Right'>
                    <div className='MenuItem'></div>
                    <div className='MenuItem' onClick={() => props.handelShow(false)}><h3>Home</h3></div>
                    <div className='MenuItem' onClick={() => props.handelShow(true)}><AddShoppingCartIcon />
                        <sup className='supcolor'>{props.count}</sup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar