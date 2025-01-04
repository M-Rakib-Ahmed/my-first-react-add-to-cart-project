import './Cart.css'

const Cart = ({selectedProducts, handleDelete}) => {
  
    return (
        <div>
         {
          selectedProducts.map((p, idx)=> (
            <div key={idx}>
              <div className="flex">
                <img className="selected-image" src={p.image} alt="" />
                <p>{p.name}</p>
                 <button onClick={()=>handleDelete(p.id)} className='delete-btn'>dedete</button>
              </div>
             
            </div>
            
          ))
         }
        </div>
    );
};

export default Cart;