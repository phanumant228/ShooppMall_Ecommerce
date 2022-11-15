import logo from './logo.svg';
import './App.css';
import Product from './componentes/Product';
import { useState } from 'react';
import Cardlist from './componentes/Cardlist';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      img: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/find-x2-blue.png",
      name: "OPPO MOBILE",
      seller: "amazom",
      price: 15000,
    },
    {
      id: 2,
      img: "https://www.tvs-e.in/wp-content/uploads/2019/12/gold-pannel-keyboard.png",
      name: "SAMSUNG KEYBOARD",
      seller: "flifcart",
      price: 1200,
    },
    {
      id: 3,
      img: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/7bb25090f641fcece00920079d2ed05b7d1626c5f9386c3eb2963e7b76251611.png",
      name: "IBALL HEADPHONE",
      seller: "myntra",
      price: 1400 ,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmKQPkPngs2WHijuT70jy1sZ0LPaklfk-zQ&usqp=CAU",
      name: "SHPORT SHOOSE",
      seller: "amazom",
      price: 1000,
    },
    {
      id: 5,
      img: "https://www.pixelstalk.net/wp-content/uploads/2016/05/Laptop-Wallpaers-HD.jpg",
      name: "APPLE LAPTOP",
      seller: "flifcart",
      price: 12000,
    },
    {
      id: 6,
      img: "https://media.croma.com/image/upload/v1651665389/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/251616_usd3hj.png",
      name: "BAJAJ MIXER",
      seller: "myntra",
      price: 3400 ,
    },
    {
      id: 7,
      img: "https://images.samsung.com/is/image/samsung/p6pim/in/ua43aue65akxxl/gallery/in-uhd-au7002-425303-ua43aue65akxxl-532615671?$650_519_PNG$",
      name: "SAMSUNG TV",
      seller: "amazom",
      price: 30000,
    },
    {
      id: 8,
      img: "https://cdn0.weddingwire.in/vendor/0761/3_2/960/jpg/mi-world-ideal_15_761.jpeg",
      name: "PAITHANI SAREE",
      seller: "flifcart",
      price: 1200,
    },
    {
      id: 9,
      img: "https://i.ytimg.com/vi/c_27igU9K0M/maxresdefault.jpg",
      name: "COTTON SHIRT",
      seller: "myntra",
      price: 1400 ,
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart]=useState(false)
  console.log(cart)
  const addToCart = (data) =>{
    setCart([...cart, {...data, quantity: 1}])
  }
  const handelShow=(value)=>{
    setShowCart(value)
  }
  return (
    <div>
      <Navbar count={cart.length} handelShow={handelShow}></Navbar>
      {
        showCart?
        <Cardlist cart={cart}></Cardlist>:
        <Product product={product} addToCart={addToCart}></Product>
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
