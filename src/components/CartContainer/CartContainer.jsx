import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'

const CartContainer = ({handleIsactive, isActive, selectedProducts, handleDelete}) => {
  
  
    return (
        <div >
          <h1>Cartcontainer.jsx</h1>  
          <div className='flex'>
            <div onClick={()=>handleIsactive('cart')} className={`${isActive.cart? "btn active":"btn"}`}>CART</div>
            <div onClick={()=> handleIsactive('about')} className={`${isActive.cart? "btn ":"active btn"}`}>ABOUT</div>
          </div>
         {isActive.cart? <Cart handleDelete={handleDelete} selectedProducts={selectedProducts }></Cart>:
          <About></About>}
        </div>
    );
};

export default CartContainer;