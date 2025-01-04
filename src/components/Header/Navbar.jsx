import './Navbar.css'
const Navbar = () => {
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
                <li>cart 1</li>
                <li>$ 500</li>
            </ul>
          </div>
        </div>
        </div>
    );
};

export default Navbar;