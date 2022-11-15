import logo from './logo.svg';
import './App.css';
import Product from './componentes/Product';
import { useState } from 'react';
import Cardlist from './componentes/Cardlist';
import Navbar from './componentes/Navbar';
import Slider from './componentes/Slider';
import Footer from './componentes/Footer';

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      img: "https://www.reliancedigital.in/medias/Motorola-E32-Mobile-Phone-492849904-i-5-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NTc1M3xpbWFnZS9qcGVnfGltYWdlcy9oZGUvaDU4Lzk4MzQxMDUwMTIyNTQuanBnfGEzZWExMTZiMmQ4OGE3MTViMDBkYmFkZTUyM2RjZWU5YmJjM2VmNDJiZWNhYjdhZTAxYzk5ODdmZWRhMDM2M2Y",
      name: "OPPO MOBILE",
      seller: "amazom",
      price: 15000,
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/NG/IQ/BG/SELLER-65481850/computer-keyboard-500x500.jpg",
      name: "SAMSUNG KEYBOARD",
      seller: "flifcart",
      price: 1200,
    },
    {
      id: 3,
      img: "https://i.gadgets360cdn.com/products/headphones-and-headsets/large/beats-solo-hd-wireless-headphone-832X558-1598516584.jpg",
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
      img: "https://rukminim1.flixcart.com/image/612/612/jmi22kw0/mixer-grinder-juicer/n/z/a/butterfly-rapid-4-jar-750-watts-original-imaf5dvgugcqyug3.jpeg?q=70",
      name: "BAJAJ MIXER",
      seller: "myntra",
      price: 3400 ,
    },
    {
      id: 7,
      img: "https://5.imimg.com/data5/UE/AT/BG/SELLER-74935595/pixel-80cm-32-inch-full-hd-led-tv-pxl32he--250x250.png",
      name: "SAMSUNG TV",
      seller: "amazom",
      price: 30000,
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/AX/RR/AL/SELLER-23242358/kora-muslin-silk-tanchoi-sarees-500x500.JPG",
      name: "PAITHANI SAREE",
      seller: "flifcart",
      price: 1200,
    },
    {
      id: 9,
      img: "https://sc04.alicdn.com/kf/H91288dd2ebc548d0982f2d6ac019022fu/227839323/H91288dd2ebc548d0982f2d6ac019022fu.jpg",
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
      {/* <Slider></Slider> */}
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
