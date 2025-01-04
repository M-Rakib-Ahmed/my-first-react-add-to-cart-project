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
//  price functon here
const [price, setPrice] =useState(500)
 
const handleAddPrice =(pr)=>{
  setPrice(price + pr)
}

const handleDeletePrice =(id)=>{
  const product = selectedProducts.find((p)=>p.id ==id)
  setPrice(price-product.price)
}


const [selectedProducts, setSelectedProducts]=useState([])

const handleDelete =(id) => {
  handleDeletePrice(id)
  const newProuect = selectedProducts.filter((p)=> p.id!==id)
  setSelectedProducts(newProuect)
  
}

const handleSelectedProduct =(product)=>{
  const isessit = selectedProducts.find((p)=>p.id == product.id);
  if(isessit){
    alert('ar add kora jabe na')
    
  }
  else{
   handleAddPrice (product.price) 
 const newProducts = [...selectedProducts, product] 
setSelectedProducts(newProducts)
    
  }
  
  
 
}



  
  return (
    <div>
      <Navbar price={price} selectedProducts={selectedProducts}></Navbar>
     <div className="flex">
       <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>
      <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsactive={handleIsactive}></CartContainer>
     </div>
    </div>
    
  );
};

export default App;