

const Cart = ({selectedProducts}) => {
  console.log(selectedProducts);
  
    return (
        <div>
         {
          selectedProducts.map((p)=> (
            <div>
              <div className="flex">
                <img src={p.image} alt="" />
                <p>name</p>
              </div>
            </div>
          ))
         }
        </div>
    );
};

export default Cart;