import './Navbar.css'
const Navbar = ({selectedProducts, price}) => {
    return (
        <div className='bg-color' >
            <div className="vavbar-container">
          <div>
            <h2>Logo</h2>
            </div>  
          <div>
            <ul className='navtext'>
                <li>home</li>
                <li>products</li>
                <li>cart:{selectedProducts.length}</li>
                <li>$ {price}</li>
            </ul>
          </div>
        </div>
        </div>
    );
};

export default Navbar;