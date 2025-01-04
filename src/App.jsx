import { useState } from 'react';
import './App.css'
import Allproducts from "./components/Allproducts/Allproducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Navbar from "./components/Header/Navbar";



const App = () => {
  const [isActive, setIsActive] = useState({
    cart:true,
    status:'cart'
  })
  const handleIsactive  =(status)=>{
    if(status == 'cart'){
      setIsActive({
        cart:true,
    status:'cart'
      })
    }
    else(
     setIsActive({
       cart:false,
    status:'about'
     }) 
    )
  }
 
const [selectedProducts, setSelectedProducts]=useState([])

const handleSelectedProduct =(product)=>{
  const newProducts = [...selectedProducts, product]
setSelectedProducts(newProducts)
  
  
  
}













  
  return (
    <div>
      <Navbar></Navbar>
     <div className="flex">
       <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
      <CartContainer isActive={isActive} handleIsactive={handleIsactive}></CartContainer>
     </div>
    </div>
    
  );
};

export default App;